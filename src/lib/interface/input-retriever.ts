import { Result } from "../core/result.js";
import { ActionInput } from "../input.js";

interface InputRetriever {
  retrieve(): Result<ActionInput, Error>;
}

export { InputRetriever };
