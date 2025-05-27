import type { GeneratorFn } from "./types.js";
import { z } from "zod/v4";
import { OpenApiGeneratorV3, extendZodWithOpenApi } from "@kingbri1/zod-to-openapi";
import type { ZodOpenAPIMetadata } from "@kingbri1/zod-to-openapi"

extendZodWithOpenApi(z);

export const generator: GeneratorFn = async (schema) => {
  // Cast to z.ZodType with OpenAPI support
  // For some reason, typescript can't recognize the extended zod type
  const zodSchema = schema as z.ZodType & {
    openapi: (name: string, metadata?: ZodOpenAPIMetadata) => z.ZodType
  };

  // Add extra openapi metadata
  zodSchema.openapi('Temp');

  // Create temp generator and create component schema
  const generator = new OpenApiGeneratorV3([zodSchema]);
  const components = generator.generateComponents();

  return components;
}
