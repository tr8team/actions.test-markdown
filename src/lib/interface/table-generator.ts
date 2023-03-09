import { Result } from "../core/result.js";
import { History } from "../input.js";

interface TableGenerator {
  generateTable(input: History): Result<string, Error[]>;
}

export { TableGenerator };
