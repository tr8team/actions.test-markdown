import { DataElement } from "../input.js";
import { None, Option, Some } from "../core/option.js";
import { emoji, resultToMarkdown } from "../util.js";
import { Converter } from "../interface/converter.js";

class DocumentationConverter implements Converter {
  convertHeader(header: DataElement): Option<string> {
    return this.convertTable(header).andThen((badge) => {
      if (header.data.type === "documentation") {
        const f = emoji(header.data.result);
        const h = `## ${f}  ${header.name}\n`;
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

  convertBadge(badge: DataElement): Option<string> {
    if (badge.data.type === "documentation") {
      const n = encodeURIComponent(badge.name);
      return Some(
        `[![badge](https://img.shields.io/badge/${n}-blue?style=for-the-badge)](${badge.url})`,
      );
    }
    return None();
  }
}

export { DocumentationConverter };
