import { ActionInput } from "../input.js";
import { Output } from "../output.js";
import { Result } from "../core/result.js";

interface RenderService {
  render(input: ActionInput): Result<Output, Error[]>;
}

export type { RenderService };
