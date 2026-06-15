import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

import type { Language } from "@/i18n";

import styles from "./language-switcher.module.css";

const languages: Array<{ label: string; value: Language }> = [
  { label: "ES", value: "es" },
  { label: "EN", value: "en" },
];

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const activeLanguage: Language = i18n.language.startsWith("en") ? "en" : "es";

  const handleLanguageChange = (language: Language) => {
    void i18n.changeLanguage(language);
  };

  return (
    <div className={styles.container} aria-label={t("common.language")}>
      <Languages size={18} aria-hidden="true" />
      {languages.map((language) => (
        <button
          key={language.value}
          type="button"
          className={`${styles.button} ${
            activeLanguage === language.value ? styles.active : ""
          }`}
          aria-label={
            language.value === "es"
              ? t("aria.selectSpanish")
              : t("aria.selectEnglish")
          }
          aria-pressed={activeLanguage === language.value}
          onClick={() => handleLanguageChange(language.value)}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
};
