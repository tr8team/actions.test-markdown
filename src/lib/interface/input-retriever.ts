import { Result } from "../core/result";
import { ActionInput } from "../input";

interface InputRetriever {
  retrieve(): Result<ActionInput, Error>;
}

export { InputRetriever };
