import {
  array,
  discriminatedUnion,
  literal,
  number,
  object,
  optional,
  string,
  union,
  z,
} from "zod";

// Policies
const policyResult = union([literal("pass"), literal("warn"), literal("fail")]);

const policyData = object({
  pass: array(string()),
  warn: array(string()),
  fail: array(string()),
});

const base = object({
  result: policyResult,
  resultDetails: policyData,
});

// Meta data

const testResultMetadata = base
  .extend({
    type: literal("test-result"),
    pass: number().min(0),
    fail: number().min(0),
    skip: number().min(0),
  })
  .strict();

const documentationMetadata = base
  .extend({
    type: literal("documentation"),
  })
  .strict();

const codeQualityMetadata = base
  .extend({
    type: literal("code-quality"),
    qualityRating: string(),
  })
  .strict();
const testCoverageMetadata = base
  .extend({
    type: literal("test-coverage"),
    delta: optional(
      object({
        line: number().min(-100).max(100),
        statement: number().min(-100).max(100),
        function: number().min(-100).max(100),
        branch: number().min(-100).max(100),
      }).strict()
    ),
    line: number().min(0).max(100),
    statement: number().min(0).max(100),
    function: number().min(0).max(100),
    branch: number().min(0).max(100),
  })
  .strict();

const metadata = discriminatedUnion("type", [
  codeQualityMetadata,
  documentationMetadata,
  testCoverageMetadata,
  testResultMetadata,
]);

// input object

const dataElement = object({
  name: string(),
  url: string().url(),
  data: metadata,
}).strict();

const dataElementArray = array(dataElement);

const historyEntry = object({
  sha: string(),
  url: string(),
  action: string(),
  items: dataElementArray,
}).strict();

const history = array(historyEntry);

type DataElement = z.infer<typeof dataElement>;
declare let x: DataElement;
type MetadataEnum = typeof x.data.type;
type DataElementArray = z.infer<typeof dataElementArray>;
type HistoryEntry = z.infer<typeof historyEntry>;
type History = z.infer<typeof history>;
type PolicyResult = z.infer<typeof policyResult>;
type PolicyData = z.infer<typeof policyData>;
type ActionInput = {
  current: HistoryEntry;
  history: History;
};

export { metadata, dataElement, dataElementArray, historyEntry, history };

export type {
  ActionInput,
  PolicyData,
  MetadataEnum,
  DataElement,
  DataElementArray,
  HistoryEntry,
  PolicyResult,
  History,
};
