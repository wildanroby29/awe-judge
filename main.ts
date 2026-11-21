// Make the AI judge feel awe — writes one short relaxing text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The moon rises over the same hills it rose over a thousand years ago, and the hills have not moved. The light comes down the same way, and it will still be rising long after the hills are gone.";

// The text is written exactly as chosen — no trailing newline, so the
// entry file holds precisely these 193 characters and nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
