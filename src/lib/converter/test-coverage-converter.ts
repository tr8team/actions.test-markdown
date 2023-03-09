import { Converter } from "../interface/converter";
import { DataElement } from "../input";
import { None, Option, Some } from "../core/option";
import { emoji, resultToColor, resultToMarkdown } from "../util";

class TestCoverageConverter implements Converter {
  convertHeader(header: DataElement): Option<string> {
    if (header.data.type === "test-coverage") {
      const f = emoji(header.data.result);
      const h = `## ${f}  ${header.name}\n`;
      const coverage = `
| Type | Coverage |
| ---- | -------- |
| Line | ${header.data.line.toFixed(2)}% |
| Statement | ${header.data.statement.toFixed(2)}% |
| Function | ${header.data.function.toFixed(2)}% |
| Branch | ${header.data.branch.toFixed(2)}% |
`;
      const diff = header.data.delta;
      const dEmoji = (d: number) => (d > 0 ? "⏫" : "⏬");
      const delta =
        diff == null
          ? coverage
          : `
| Type | Coverage | Delta |
| ---- | -------- | ----- |
| Line | ${header.data.line.toFixed(2)}% | ${diff.line.toFixed(2)}% ${dEmoji(
              diff.line
            )} |
| Statement | ${header.data.statement.toFixed(2)}% | ${diff.statement.toFixed(
              2
            )}% ${dEmoji(diff.statement)} |
| Function | ${header.data.function.toFixed(2)}% | ${diff.function.toFixed(
              2
            )}% ${dEmoji(diff.function)} |
| Branch | ${header.data.branch.toFixed(2)}% | ${diff.branch.toFixed(
              2
            )}% ${dEmoji(diff.branch)} |
`;

      const policy = resultToMarkdown(header.data.resultDetails);
      return Some(`
${h}
Report: [Coverage](${header.url})
${coverage}
${delta}
${policy}
`);
    }
    return None();
  }

  convertTable(table: DataElement): Option<string> {
    if (table.data.type === "test-coverage") {
      const color = resultToColor(table.data.result);
      const d = table.data;
      // ☲ 100% | ∬ 90.2% | 🜉 25.5%
      return Some(
        `[![badge](https://img.shields.io/badge/coverage` +
          `-%E2%98%B2%20${d.statement.toFixed(
            1
          )}%25%20%7C%20%E2%88%AC%20${d.function.toFixed(
            1
          )}%25%20%7C%20%F0%9F%9C%89%20${d.branch.toFixed(1)}%25` +
          `-${color})](${table.url})`
      );
    }
    return None();
  }
}

export { TestCoverageConverter };
