import { ArrowRight, BriefcaseBusiness, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/UI";
import { usePortfolio } from "@/hooks/use-portfolio";
import styles from "./summary.module.css";

export const Summary = () => {
  const shouldReduceMotion = useReducedMotion();
  const { portfolio } = usePortfolio();
  const { t } = useTranslation();
  const {
    headerTaglineOne,
    headerTaglineTwo,
    headerTaglineThree,
    headerTaglineFour,
  } = portfolio.section_summary;

  const containerMotion = shouldReduceMotion
    ? { initial: false }
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, ease: "easeOut" as const },
      };

  return (
    <section id="summary" className={styles.bg_summary}>
      <div className={styles.container}>
        <motion.div className={styles.summary_main} {...containerMotion}>
          <div className={styles.summary_content}>
          <p className={styles.eyebrow}>
            <span />
            {t("hero.eyebrow")}
          </p>
          <p className="text text-grey text-medium">
            {headerTaglineOne} {headerTaglineTwo}
          </p>
          <h2 className="text text-h2">{headerTaglineThree}</h2>
          <div className={styles.container_desc_btns}>
            <p className="text text-grey">{headerTaglineFour}</p>
            <div className={styles.buttons}>
              <Button
                aria-label={t("hero.viewProjects")}
                className={styles.button}
                icon={<BriefcaseBusiness size={18} />}
                label={t("hero.viewProjects")}
                variant="secondary"
                onClick={() => (window.location.href = "#projects")}
              />
              <Button
                aria-label={t("hero.viewServices")}
                className={styles.button}
                icon={<ArrowRight size={18} />}
                label={t("hero.viewServices")}
                variant="outlined"
                onClick={() => (window.location.href = "#services")}
              />
              <Button
                aria-label={t("hero.contactMe")}
                className={styles.button}
                icon={<MessageCircle size={18} />}
                label={t("hero.contactMe")}
                variant="primary"
                onClick={() => (window.location.href = "#contact")}
              />
            </div>
          </div>
          <div className={styles.stats}>
            <div>
              <strong>5+</strong>
              <span>{t("hero.stats.experience")}</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>{t("hero.stats.projects")}</span>
            </div>
            <div>
              <strong>2x</strong>
              <span>{t("hero.stats.focus")}</span>
            </div>
          </div>
          </div>
          <motion.figure
            className={styles.profile_card}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            whileHover={shouldReduceMotion ? undefined : { y: -8, rotate: 1 }}
          >
            <img
              src={portfolio.section_aboutme.profile_url}
              alt="Jose Manuel Tuberquia"
            />
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
};
