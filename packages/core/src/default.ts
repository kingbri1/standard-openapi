import type { SchemaResult } from "zod-openapi";
import convert from "./convertor.js";
import type { GeneratorFn } from "./types.js";
import { toJsonSchema } from "@kingbri1/standard-json";

export const generator: GeneratorFn = async (schema) => {
  const jsonSchema = toJsonSchema(schema);
  return {
    schema: await convert(jsonSchema),
  } as unknown as SchemaResult;
};
