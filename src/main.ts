import os from "os";
import { GithubActionLogger } from "./external/github-action-logger";
import { ZodValidatorAdapter } from "./lib/adapters/zod-validator-adapter";
import { GithubActionIO } from "./external/github-action-i-o";
import { IoInputRetriever } from "./lib/adapters/io-input-retriever";
import { setFailed } from "@actions/core";
import { historyEntry, history } from "./lib/input";
import { SimpleRenderService } from "./lib/simple-render-service";
import { SimpleTableGenerator } from "./lib/simple-table-generator";
import { Kore } from "@kirinnee/core";
import { Converter } from "./lib/interface/converter";
import { App } from "./lib/main";
import { stringToOption } from "./lib/util";

const core = new Kore();
core.ExtendPrimitives();
const log = new GithubActionLogger();
const historyValidator = new ZodValidatorAdapter(history);
const historyEntryValidator = new ZodValidatorAdapter(historyEntry);
const io = new GithubActionIO();
const input = new IoInputRetriever(io, historyEntryValidator, historyValidator);
const converters: Converter[] = [];
const tableGen = new SimpleTableGenerator(converters, core);
const service = new SimpleRenderService(converters, tableGen);
const app = new App(input, service, io);

await app.run().match({
  none: () => {
    log.info("✅ Successfully extracted metadata");
  },
  some: async (errs) => {
    log.error("❌ Failed to extract metadata");
    for (const err of errs) {
      setFailed(err);
      const messages = await stringToOption(err?.stack).match({
        none: ["❌ No stacktrace found!"],
        some: (stacktrace) => stacktrace.split(os.EOL),
      });
      for (const m of messages) {
        log.error(m);
      }
    }
  },
});
