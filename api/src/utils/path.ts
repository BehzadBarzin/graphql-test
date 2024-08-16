import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// -----------------------------------------------------------------------------
// ESM Module doesn't provide these variables in the global context
// ⚠️ if in package.json "type": "module" is set and compiling TS to ESM syntax, enable below lines
// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);

// -----------------------------------------------------------------------------

/**
 * A function that finds the root of the project (where main package.json is located)
 *
 * @returns path to the root of the project
 */
export function findRootDirectory() {
  let currentDir = __dirname;

  while (true) {
    // Check if we've reached the root directory
    if (path.dirname(currentDir) === currentDir) {
      console.error("❌ Project root not found.");
      process.exit(1); // Exit with error
    }

    // Check for a marker file or directory that signifies the project root
    if (fs.existsSync(path.join(currentDir, "package.json"))) {
      return path.resolve(currentDir);
    }

    // Move up one directory level
    currentDir = path.dirname(currentDir);
  }
}
