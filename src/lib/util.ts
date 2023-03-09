import { ZodError } from "zod";
import { Err, Ok, Result } from "./core/result.js";
import { None, Option, Some } from "./core/option";
import { PolicyData, PolicyResult } from "./input";

function toResult<T>(
  du: { success: true; data: T } | { success: false; error: ZodError }
): Result<T, ZodError> {
  if (du.success) {
    return Ok(du.data);
  }
  return Err(du.error);
}

function parseJSON<T>(raw: string): Result<T, Error> {
  try {
    const json: T = JSON.parse(raw);
    return Ok(json);
  } catch (e) {
    return Err(e as Error);
  }
}

function stringToOption(s: string | null | undefined): Option<string> {
  if (s == null) {
    return None();
  }
  return s.length === 0 ? None() : Some(s);
}

function emoji(a: PolicyResult) {
  switch (a) {
    case "pass":
      return "✅";
    case "fail":
      return "❌";
    case "warn":
      return "⚠️";
    default:
      return "❓";
  }
}

function resultToColor(a: PolicyResult) {
  switch (a) {
    case "pass":
      return "green";
    case "fail":
      return "red";
    case "warn":
      return "orange";
    default:
      return "lightgrey";
  }
}

function resultToMarkdown(p: PolicyData): string {
  if (p.fail.length + p.warn.length + p.pass.length === 0) return "";
  const fail = p.fail.map((x) => `* ${emoji("fail")} ${x}`);
  const warn = p.warn.map((x) => `* ${emoji("warn")} ${x}`);
  const pass = p.pass.map((x) => `* ${emoji("pass")} ${x}`);
  return `**Policies:**\n${[...fail, ...warn, ...pass].join("\n")}`;
}

export {
  toResult,
  parseJSON,
  stringToOption,
  emoji,
  resultToMarkdown,
  resultToColor,
};
