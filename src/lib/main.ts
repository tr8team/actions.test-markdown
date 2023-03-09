import { Option } from "./core/option";
import { InputRetriever } from "./interface/input-retriever";
import { RenderService } from "./interface/service";
import { ActionIO } from "./interface/io";

export class App {
  readonly #input: InputRetriever;
  readonly #service: RenderService;

  readonly #io: ActionIO;

  run(): Option<Error[]> {
    return this.#input
      .retrieve()
      .mapErr((x) => [x])
      .andThen((x) => this.#service.render(x))
      .run((o) => {
        this.#io.set("currentMarkdown", o.currentMarkdown);
        this.#io.set("historyMarkdown", o.historyMarkdown);
      })
      .err();
  }

  constructor(input: InputRetriever, service: RenderService, io: ActionIO) {
    this.#input = input;
    this.#service = service;
    this.#io = io;
  }
}
