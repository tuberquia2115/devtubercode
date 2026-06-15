import { useTranslation } from "react-i18next";

import portfolioEn from "@/data/portfolio.en.json";
import portfolioEs from "@/data/portfolio.json";
import type { Portfolio, PortfolioLanguage } from "@/data/portfolio.types";

export const usePortfolio = (): {
  language: PortfolioLanguage;
  portfolio: Portfolio;
} => {
  const { i18n } = useTranslation();
  const language: PortfolioLanguage = i18n.language.startsWith("en")
    ? "en"
    : "es";

  return {
    language,
    portfolio: (language === "en" ? portfolioEn : portfolioEs) as Portfolio,
  };
};
