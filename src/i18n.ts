import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/locales/en.json";
import es from "@/locales/es.json";

export type Language = "es" | "en";

const storedLanguage = window.localStorage.getItem("portfolio-language");
const initialLanguage: Language = storedLanguage === "en" ? "en" : "es";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: initialLanguage,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (language) => {
  window.localStorage.setItem("portfolio-language", language);
});

export default i18n;
