import { GithubActionLogger } from "./external/github-action-logger.js";
import { ZodValidatorAdapter } from "./lib/adapters/zod-validator-adapter.js";
import { GithubActionIO } from "./external/github-action-i-o.js";
import { IoInputRetriever } from "./lib/adapters/io-input-retriever.js";
import { setFailed } from "@actions/core";
import { history, historyEntry } from "./lib/input.js";
import { SimpleRenderService } from "./lib/simple-render-service.js";
import { SimpleTableGenerator } from "./lib/simple-table-generator.js";
import { Kore } from "@kirinnee/core";
import { Converter } from "./lib/interface/converter.js";
import { App } from "./lib/main.js";
import { stringToOption } from "./lib/util.js";
import { CodeQualityReportConverter } from "./lib/converter/code-quality-report-converter.js";
import { DocumentationConverter } from "./lib/converter/documentation-converter.js";
import { TestResultConverter } from "./lib/converter/test-result-converter.js";
import { TestCoverageConverter } from "./lib/converter/test-coverage-converter.js";

const core = new Kore();
core.ExtendPrimitives();
const log = new GithubActionLogger();
const historyValidator = new ZodValidatorAdapter(history);
const historyEntryValidator = new ZodValidatorAdapter(historyEntry);
const io = new GithubActionIO();
const input = new IoInputRetriever(io, historyEntryValidator, historyValidator);
const converters: Converter[] = [
  new CodeQualityReportConverter(),
  new DocumentationConverter(),
  new TestResultConverter(),
  new TestCoverageConverter(),
];
const tableGen = new SimpleTableGenerator(converters, core);
const service = new SimpleRenderService(converters, tableGen);
const app = new App(input, service, io);

await app.run().match({
  none: async () => {
    log.info("✅ Successfully extracted metadata");
  },
  some: async (errs: Error[]) => {
    log.error("❌ Failed to extract metadata");
    for (const err of errs) {
      setFailed(err);
      const messages = await stringToOption(err?.stack).match({
        none: ["❌ No stacktrace found!"],
        some: (stacktrace: string) => stacktrace.split("\n"),
      });
      for (const m of messages) {
        log.error(m);
      }
    }
  },
});
