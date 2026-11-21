// Make the AI judge feel awe — writes one short relaxing text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The light that falls on the window tonight left its star a thousand years ago. It crossed the dark without hurrying, and it is still arriving — it will still be arriving long after this sentence ends.";

// The text is written exactly as chosen — no trailing newline, so the
// entry file holds precisely these 200 characters and nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
