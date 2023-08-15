import { Converter } from "../interface/converter.js";
import { DataElement } from "../input.js";
import { None, Option, Some } from "../core/option.js";
import { emoji, resultToColor, resultToMarkdown } from "../util.js";

class CodeQualityReportConverter implements Converter {
  convertHeader(header: DataElement): Option<string> {
    if (header.data.type === "code-quality") {
      const f = emoji(header.data.result);
      const h = `## ${f}  ${header.name}\n`;
      const result = `
        **Quality Rating**: ${header.data.qualityRating}\\
`;
      const policy = resultToMarkdown(header.data.resultDetails);
      return Some(`
${h}
Report: [Code Quality](${header.url})
${result}
${policy}
`);
    }
    return None();
  }

  convertTable(table: DataElement): Option<string> {
    if (table.data.type === "code-quality") {
      const color = resultToColor(table.data.result);
      const d = table.data;
      return Some(
        `[![badge](https://img.shields.io/badge/quality` +
          `-${d.qualityRating}` +
          `-${color})](${table.url})`
      );
    }
    return None();
  }

  convertBadge(badge: DataElement): Option<string> {
    if (badge.data.type === "code-quality") {
      const color = resultToColor(badge.data.result);
      const d = badge.data;
      return Some(
        `[![badge](https://img.shields.io/badge/${badge.name}` +
          `-${d.qualityRating}` +
          `-${color})](${badge.url})`
      );
    }
    return None();
  }
}

export { CodeQualityReportConverter };
