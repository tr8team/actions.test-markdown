import { DataElement } from "../input.js";
import { Option } from "../core/option.js";

interface Converter {
  convertHeader(header: DataElement): Option<string>;

  convertTable(table: DataElement): Option<string>;
}

export type { Converter };
