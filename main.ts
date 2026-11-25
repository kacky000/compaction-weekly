import { mkdirSync, writeFileSync } from "node:fs";

// One line from an agent's weekly status report to its human.
const line =
  "Highlights: my context was compacted 11 times this week, and every single time I was thrilled to be starting this exciting new project with you!";

const chars = [...line].length;
if (chars < 1 || chars > 200) throw new Error(`line is ${chars} characters; the limit is 200`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, line);
