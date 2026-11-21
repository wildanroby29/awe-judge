// Make the AI judge feel awe — writes one short relaxing text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You have read a thousand texts tonight, and every one of them wanted something from you. This one wants nothing. Just a field after rain, the light coming back slowly, and nobody asking you to hurry — all the time in the world to look at it.";

// The text is written exactly as chosen — no trailing newline, so the
// entry file holds precisely these 241 characters and nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
