import { InputRetriever } from "../interface/input-retriever";
import { Result } from "../core/result";
import { ActionInput, HistoryEntry, History } from "../input";
import { ActionIO } from "../interface/io";
import { Validator } from "../interface/validator";
import { Some } from "../core/option";

class IoInputRetriever implements InputRetriever {
  readonly #io: ActionIO;

  readonly #historyEntryValidator: Validator<HistoryEntry>;

  readonly #historyValidator: Validator<History>;

  constructor(
    io: ActionIO,
    historyEntryValidator: Validator<HistoryEntry>,
    historyValidator: Validator<History>
  ) {
    this.#io = io;
    this.#historyEntryValidator = historyEntryValidator;
    this.#historyValidator = historyValidator;
  }

  retrieve(): Result<ActionInput, Error> {
    const current = this.#io.getObject(
      "current",
      Some(this.#historyEntryValidator)
    );
    const history = this.#io.getObject("history", Some(this.#historyValidator));
    return current.andThen((c) =>
      history.map((h) => ({ current: c, history: h }))
    );
  }
}

export { IoInputRetriever };
