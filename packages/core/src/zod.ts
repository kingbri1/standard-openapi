import type { GeneratorFn } from "./types.js";
import * as z from "zod/v4/core";
import convert from "./convertor.js";

// Fallback to use schemaType as input if metadata isn't provided
export const generator: GeneratorFn = async (schema) => {
  const jsonSchema = z.toJSONSchema(schema as z.$ZodType, { io: "input", target: "draft-7" });

  return {
    schema: await convert(jsonSchema),
  } as Record<string, unknown>;
}
