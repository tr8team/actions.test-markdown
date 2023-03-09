import { DataElement } from "../input";
import { Option } from "../core/option";

interface Converter {
  convertHeader(header: DataElement): Option<string>;

  convertTable(table: DataElement): Option<string>;
}

export type { Converter };
