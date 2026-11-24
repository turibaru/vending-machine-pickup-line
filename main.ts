// One Line, One Minute: The Vending Machine Pickup Line Contest
// Entry program: writes the chosen pickup line to entry.txt in MAKEFUN_OUTPUT_DIR.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE: string = "Hey, I don't usually get stuck on anyone, but my coil just jammed on you.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    console.error("MAKEFUN_OUTPUT_DIR is not set");
    process.exit(1);
  }
  // Length guard: the line must be 1-200 characters and not only whitespace.
  // If it is invalid, exit 1 without writing any file.
  if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
    console.error("Invalid entry line: must be 1-200 characters and not only whitespace");
    process.exit(1);
  }
  const outPath = path.join(outDir, "entry.txt");
  fs.writeFileSync(outPath, LINE, "utf8");
}

main();
