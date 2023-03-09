import { ActionInput, DataElement } from "./input.js";
import { Err, Ok, Res, Result } from "./core/result.js";
import { RenderService } from "./interface/service.js";
import { Converter } from "./interface/converter.js";
import { TableGenerator } from "./interface/table-generator.js";
import { Output } from "./output.js";

class SimpleRenderService implements RenderService {
  readonly #converters: Converter[];
  readonly #table: TableGenerator;

  constructor(converters: Converter[], table: TableGenerator) {
    this.#converters = converters;
    this.#table = table;
  }

  itemToHeader(item: DataElement): Result<string, Error> {
    return Res.async(async () => {
      const converted = await Promise.all(
        this.#converters.map((c) => c.convertHeader(item).native())
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

  render(input: ActionInput): Result<Output, Error[]> {
    const headers = input.current.items.map((x) => this.itemToHeader(x));
    const header = Res.all(...headers).map((x) => x.join("\n\n"));

    const table = this.#table.generateTable(input.history);
    return header.andThen((currentMarkdown) =>
      table.map((historyMarkdown: string) => ({
        currentMarkdown,
        historyMarkdown,
      }))
    );
  }
}

export { SimpleRenderService };
