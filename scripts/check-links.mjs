// Checks links in dist/: internal files and anchors always, external URLs with --external.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const checkExternal = process.argv.includes("--external");
// Sites that block automated requests, so a failure says nothing about the link.
const skipHosts = ["www.linkedin.com"];

const pages = readdirSync("dist", { recursive: true })
  .map((file) => join("dist", String(file)).replaceAll("\\", "/"))
  .filter((file) => file.endsWith(".html"));

const decode = (value) =>
  value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replaceAll("&amp;", "&");

const problems = [];
const external = new Set();

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
  const targets = [...html.matchAll(/\s(?:href|src|poster)="([^"]+)"/g)].map((match) =>
    decode(match[1]),
  );

  for (const target of targets) {
    if (target.startsWith("#")) {
      if (target.length > 1 && !ids.has(target.slice(1))) {
        problems.push(`${page}: missing anchor ${target}`);
      }
    } else if (target.startsWith("http")) {
      external.add(target);
    } else if (target.startsWith("/")) {
      const path = target.split(/[?#]/)[0];
      const file = path.endsWith("/") ? `dist${path}index.html` : `dist${path}`;
      if (!existsSync(file)) problems.push(`${page}: missing file ${target}`);
    } else if (!target.startsWith("mailto:")) {
      problems.push(`${page}: unexpected link ${target}`);
    }
  }
}

if (checkExternal) {
  const ownSite = "https://saulcone.github.io";
  const urls = [...external].filter(
    (url) => !url.startsWith(ownSite) && !skipHosts.includes(new URL(url).host),
  );
  await Promise.all(
    urls.map(async (url) => {
      try {
        const response = await fetch(url, { redirect: "follow" });
        if (!response.ok) problems.push(`${url}: HTTP ${response.status}`);
      } catch (error) {
        problems.push(`${url}: ${error.message}`);
      }
    }),
  );
  console.log(`Checked ${urls.length} external links.`);
}

if (problems.length > 0) {
  console.error("Broken links:");
  problems.forEach((problem) => console.error(`  - ${problem}`));
  process.exit(1);
}

console.log(`Links are fine across ${pages.length} pages.`);
