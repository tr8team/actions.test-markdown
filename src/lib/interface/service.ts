import { ActionInput } from "../input";
import { Result } from "../core/result";
import { Output } from "../output";

interface RenderService {
  render(input: ActionInput): Result<Output, Error[]>;
}
export type { RenderService };
