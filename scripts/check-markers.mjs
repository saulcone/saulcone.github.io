// Deploy gate: blocks publishing while dist/ has pending data or banned content.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const banned = [
  { pattern: /\[\[[^\]]*\]\]/g, reason: "pending marker" },
  { pattern: /\+34[\s\d]{9,}/g, reason: "phone number" },
  { pattern: /vuelo f[ií]sico|physical flight/gi, reason: "TFG claim: there was no real flight" },
  { pattern: /sin nube|no cloud/gi, reason: "TFG claim: the main model ran in the cloud" },
  { pattern: /\b(?:experto|senior|10x|rockstar)\b/gi, reason: "level claim" },
];

const files = readdirSync("dist", { recursive: true })
  .map((file) => join("dist", String(file)))
  .filter((file) => /\.(html|xml|txt|vtt)$/.test(file));

const problems = [];
for (const file of files) {
  const content = readFileSync(file, "utf8");
  for (const { pattern, reason } of banned) {
    for (const match of new Set(content.match(pattern) ?? [])) {
      problems.push(`${file}: ${reason}: ${match}`);
    }
  }
}

if (problems.length > 0) {
  console.error("Not ready to publish:");
  problems.forEach((problem) => console.error(`  - ${problem}`));
  process.exit(1);
}

console.log(`No pending markers or banned content in ${files.length} files.`);
