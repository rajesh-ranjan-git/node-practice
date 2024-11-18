import { fileURLToPath } from "url";
import path from "path";

const rootDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../"
);

export default rootDir;
