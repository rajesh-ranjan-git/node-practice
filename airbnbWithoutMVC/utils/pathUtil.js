import { fileURLToPath } from "url";
import path from "path";

export const rootDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../"
);
