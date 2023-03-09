import { TableGenerator } from "./interface/table-generator";
import { Err, Ok, Res, Result } from "./core/result";
import { DataElement, History, HistoryEntry } from "./input";
import { Converter } from "./interface/converter";
import { Core } from "@kirinnee/core";

class SimpleTableGenerator implements TableGenerator {
  readonly #converters: Converter[];

  constructor(converters: Converter[], k: Core) {
    this.#converters = converters;
    k.AssertExtend();
  }

  getHeaders(input: History): string[] {
    return input
      .map((x) => x.items.map((y) => y.name))
      .flat(1)
      .Unique();
  }

  itemToElement(item: DataElement): Result<string, Error> {
    return Res.async(async () => {
      const converted = await Promise.all(
        this.#converters.map((c) => c.convertTable(item).native())
      );
      const top = converted.filter((x) => x != null);
      if (top.length !== 1) {
        if (top.length > 1) {
          return Err(
            new Error(`Multiple converters matched ${item.data.type}`)
          );
        }
        return Err(new Error(`No converters matched ${item.data.type}`));
      }
      return Ok(top[0] as string);
    });
  }

  buildTableRow(headers: string[], h: HistoryEntry): Result<string, Error[]> {
    const rowResultRaw = headers.map((header) => {
      const r = h.items.find((x) => x.name === header);
      if (r == null) {
        return Ok("-");
      }
      return this.itemToElement(r);
    });
    return Res.all(...rowResultRaw).map((x) => `|${x.join(" | ")} |`);
  }

  buildHeaderRow(headers: string[]): string {
    const headerRow1 = `${headers.map((header) => `| ${header} `).join("")}|\n`;
    const headerRow2 = `${headers
      .map((header) => `| ${"-".Repeat(header.length.AtMin(3))} `)
      .join("")}|\n`;
    return headerRow1 + headerRow2;
  }

  generateTable(input: History): Result<string, Error[]> {
    const headers = this.getHeaders(input);
    const headerRow = this.buildHeaderRow(headers);

    // build children
    const rowsResults = input.map((h) => this.buildTableRow(headers, h));
    return Res.all(...rowsResults)
      .map((x) => headerRow + x.join("\n"))
      .mapErr((x) => x.flat(1));
  }
}

export { SimpleTableGenerator };
