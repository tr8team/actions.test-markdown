import { Result } from "../core/result";
import { History } from "../input";

interface TableGenerator {
  generateTable(input: History): Result<string, Error[]>;
}

export { TableGenerator };
