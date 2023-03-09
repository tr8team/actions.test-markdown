import { Converter } from "../interface/converter";
import { DataElement } from "../input";
import { None, Option, Some } from "../core/option";
import { emoji, resultToColor, resultToMarkdown } from "../util";

class TestResultConverter implements Converter {
  convertHeader(header: DataElement): Option<string> {
    if (header.data.type === "test-result") {
      const f = emoji(header.data.result);
      const h = `## ${f}  ${header.name}\n`;
      const result = `
| Tests | Amount |
| ---- | -------- |
| Pass | ${header.data.pass} |
| Fail | ${header.data.fail} |
| Skip | ${header.data.skip} |
`;
      const policy = resultToMarkdown(header.data.resultDetails);
      return Some(`
${h}
Report: [Test Results](${header.url})
${result}
${policy}
`);
    }
    return None();
  }

  convertTable(table: DataElement): Option<string> {
    if (table.data.type === "test-result") {
      const color = resultToColor(table.data.result);
      const d = table.data;
      // ✔ HELLO | ✘ HELLO | ➟ HELLO
      return Some(
        `[![badge](https://img.shields.io/badge/test` +
          `-%E2%9C%94%20${d.pass}%20%7C%20%E2%9C%98%20${d.fail}%20%7C%20%E2%9E%9F%20${d.skip}` +
          `-${color})](${table.url})`
      );
    }
    return None();
  }
}

export { TestResultConverter };
