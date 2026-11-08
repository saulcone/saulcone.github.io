// Fails the build if data/profile.json is malformed or breaks the brief's rules.
import { existsSync, readFileSync } from "node:fs";
import { z } from "astro/zod";

const raw = readFileSync(new URL("../data/profile.json", import.meta.url), "utf8");
const profile = JSON.parse(raw);

const bilingual = z.object({ es: z.string().min(1), en: z.string().min(1) });
const label = z.union([z.string().min(1), bilingual]);
const month = z.string().regex(/^\d{4}-\d{2}$/);
const bilingualList = z.object({ es: z.array(z.string()), en: z.array(z.string()) });

const schema = z.object({
  name: z.string().min(1),
  photo: z.string().startsWith("/").optional(),
  site: z.url(),
  role: bilingual,
  location: bilingual,
  availability: bilingual,
  contact: z.object({
    email: z.email(),
    linkedin: z.url(),
    github: z.url(),
    phone_public: z.literal(false),
  }),
  cv_files: bilingual,
  education: z.array(
    z.object({ institution: z.string(), degree: bilingual, start: month, end: month }),
  ),
  experience: z.array(
    z.object({
      company: z.string(),
      role: bilingual,
      start: month,
      end: month,
      location: z.string(),
      stack: z.array(label),
      highlights: bilingualList,
      confidential: z.literal(true),
    }),
  ),
  projects: z.array(
    z.object({
      id: z.string(),
      featured: z.boolean(),
      image: z.object({ src: z.string().startsWith("/"), alt: bilingual }).optional(),
      contribution: bilingual.optional(),
      title: bilingual,
      type: bilingual,
      stack: z.array(label).min(1),
      summary: bilingual,
      links: z.record(z.string(), z.string()),
    }),
  ),
  skills: z.object({
    categories: z.array(
      z.object({
        name: bilingual,
        work: z.array(label),
        projects: z.array(label),
        learning: z.array(label),
      }),
    ),
  }),
  languages: z.array(z.object({ name: bilingual, level: bilingual })),
  looking_for: bilingual,
});

const errors = [];
const parsed = schema.safeParse(profile);
if (!parsed.success) {
  errors.push(...parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`));
}

if (profile.projects.filter((project) => project.featured).length !== 1) {
  errors.push("projects: there must be exactly one featured project");
}

if (profile.photo && !existsSync(new URL(`../public${profile.photo}`, import.meta.url))) {
  errors.push(`photo: missing file ${profile.photo}`);
}

for (const project of profile.projects) {
  if (project.image && !existsSync(new URL(`../public${project.image.src}`, import.meta.url))) {
    errors.push(`projects.${project.id}: missing image ${project.image.src}`);
  }
}

if (errors.length > 0) {
  console.error("data/profile.json is not valid:");
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exit(1);
}

console.log("data/profile.json is valid.");
