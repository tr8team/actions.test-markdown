import { Converter } from "../interface/converter";
import { DataElement } from "../input";
import { None, Option, Some } from "../core/option";
import { emoji, resultToColor, resultToMarkdown } from "../util";

class CodeQualityReportConverter implements Converter {
  convertHeader(header: DataElement): Option<string> {
    return this.convertTable(header).andThen((badge) => {
      if (header.data.type === "code-quality") {
        const f = emoji(header.data.result);
        const h = `##### ${f}  ${header.name}\n`;
        const result = `
        **Quality Rating**: ${header.data.qualityRating}\\
`;
        const policy = resultToMarkdown(header.data.resultDetails);
        return Some(`
 ${h}
 Report: ${badge}
 ${result}
${policy}
`);
      }
      return None();
    });
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
}

export { CodeQualityReportConverter };
