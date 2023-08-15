import { InputRetriever } from "./interface/input-retriever.js";
import { RenderService } from "./interface/service.js";
import { Option } from "./core/option.js";
import { ActionIO } from "./interface/io.js";

export class App {
  readonly #input: InputRetriever;
  readonly #service: RenderService;

  readonly #io: ActionIO;

  constructor(input: InputRetriever, service: RenderService, io: ActionIO) {
    this.#input = input;
    this.#service = service;
    this.#io = io;
  }

  run(): Option<Error[]> {
    return this.#input
      .retrieve()
      .mapErr((x) => [x])
      .andThen((x) => this.#service.render(x))
      .run((o) => {
        this.#io.set("currentMarkdown", o.currentMarkdown);
        this.#io.set("historyMarkdown", o.historyMarkdown);
        this.#io.set("badges", o.badges);
      })
      .err();
  }
}
