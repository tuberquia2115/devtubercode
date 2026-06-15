import { useState } from "react";
import { FileText } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";

import { Button, CvModal } from "@/components";
import { usePortfolio } from "@/hooks/use-portfolio";
import CV_ES from "/assets/cv-es.pdf";
import CV_EN from "/assets/cv-en.pdf";

import styles from "./about-me.module.css";

export const AboutMe = () => {
  const [selectedCv, setSelectedCv] = useState<"es" | "en" | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { language, portfolio } = usePortfolio();
  const { t } = useTranslation();
  const cvItems = [
    {
      downloadLabel: t("cv.downloadSpanish"),
      fileName: "software_developer_jose_manuel_tuberquia_es.pdf",
      label: t("cv.openSpanish"),
      language: "es" as const,
      pdfUrl: CV_ES,
    },
    {
      downloadLabel: t("cv.downloadEnglish"),
      fileName: "software_developer_jose_manuel_tuberquia_en.pdf",
      label: t("cv.openEnglish"),
      language: "en" as const,
      pdfUrl: CV_EN,
    },
  ].sort((firstItem) => (firstItem.language === language ? -1 : 1));
  const activeCv = cvItems.find((item) => item.language === selectedCv);

  return (
    <section id="about" className="container">
      <div className={styles.about_layout}>
        <motion.div
          className="gap-3"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="gap-0-5">
            <h1 className="text text-h5 text-secondary">
              {portfolio.section_aboutme.title}
            </h1>
            <h2 className="text text-h2">
              {portfolio.section_aboutme.subtitle}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: portfolio.section_aboutme.description,
              }}
              className="text text-grey gap-1"
            />

            <div className={styles.buttons_cv}>
              {cvItems.map((item) => (
                <Button
                  key={item.language}
                  icon={<FileText size={18} />}
                  label={item.label}
                  variant={item.language === language ? "secondary" : "outlined"}
                  onClick={() => setSelectedCv(item.language)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      {activeCv && (
        <CvModal
          downloadLabel={activeCv.downloadLabel}
          fileName={activeCv.fileName}
          isOpen={Boolean(selectedCv)}
          onClose={() => setSelectedCv(null)}
          pdfUrl={activeCv.pdfUrl}
        />
      )}
    </section>
  );
};
