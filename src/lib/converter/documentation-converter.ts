import { Converter } from "../interface/converter";
import { DataElement } from "../input";
import { None, Option, Some } from "../core/option";
import { emoji, resultToMarkdown } from "../util";

class DocumentationConverter implements Converter {
  convertHeader(header: DataElement): Option<string> {
    return this.convertTable(header).andThen((badge) => {
      if (header.data.type === "documentation") {
        const f = emoji(header.data.result);
        const h = `##### ${f}  ${header.name}\n`;
        const policy = resultToMarkdown(header.data.resultDetails);
        return Some(`
${h}
Report: ${badge}
${policy}
`);
      }
      return None();
    });
  }

  convertTable(table: DataElement): Option<string> {
    if (table.data.type === "documentation") {
      return Some(`[${table.name}](${table.url})`);
    }
    return None();
  }
}

export { DocumentationConverter };
