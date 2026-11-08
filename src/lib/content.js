import profile from "../../data/profile.json";
import es from "../i18n/es.json";
import en from "../i18n/en.json";

const dictionaries = { es, en };

export { profile };

export const getText = (lang) => dictionaries[lang];

/** The name without accents, as many people type it into a search box. */
export const plainName = profile.name.normalize("NFD").replace(/\p{Diacritic}/gu, "");

export const homePath = (lang) => (lang === "en" ? "/en/" : "/");

/** Returns a plain string, or the entry for `lang` in a bilingual object. */
export const localized = (value, lang) => (typeof value === "string" ? value : value[lang]);

/** Data still waiting for Saúl: see docs/08-pendientes.md. */
export const isPending = (value) => typeof value === "string" && value.includes("[[PENDIENTE");

/** Formats "2026-06" as "jun. 2026". */
export const formatMonth = (value, lang) => {
  const [year, month] = value.split("-");
  return `${getText(lang).months[Number(month) - 1]} ${year}`;
};

export const formatRange = (start, end, lang) =>
  `${formatMonth(start, lang)} – ${formatMonth(end, lang)}`;

/** Percentages are stored with a decimal comma: "66,7". */
export const formatPercent = (value, lang) => {
  const number = lang === "en" ? value.replace(",", ".") : value;
  return getText(lang).percent.replace("{n}", number);
};

/** Light anti-spam: encodes each character as an HTML entity. */
export const encodeEntities = (text) =>
  [...text].map((char) => `&#${char.codePointAt(0)};`).join("");
