import convert from "./convertor.js";
import type { GeneratorFn } from "./types.js";
import { toJsonSchema } from "@standard-community/standard-json";

export const generator: GeneratorFn = async (schema) => {
  const jsonSchema = toJsonSchema(schema);
  return {
    schema: await convert(jsonSchema),
  };
};
