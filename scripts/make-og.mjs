// Generates public/og-image.png (1200×630). Run with: npm run og
import { readFileSync } from "node:fs";
import sharp from "sharp";

const profile = JSON.parse(readFileSync("data/profile.json", "utf8"));

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#f6f6f3"/>
  <rect x="80" y="170" width="10" height="290" fill="#0b6b66"/>
  <text x="130" y="290" font-family="Segoe UI, Inter, sans-serif" font-size="76" font-weight="700" fill="#181b1f">${profile.name}</text>
  <text x="130" y="375" font-family="Segoe UI, Inter, sans-serif" font-size="42" fill="#545b63">${profile.role.en.replace("&", "&amp;")}</text>
  <text x="130" y="445" font-family="Consolas, monospace" font-size="30" fill="#0b6b66">saulcone.github.io</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og-image.png");
console.log("public/og-image.png generated.");
