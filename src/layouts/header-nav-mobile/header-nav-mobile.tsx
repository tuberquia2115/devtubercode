import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { CloseIcon, LanguageSwitcher } from "@/components";
import { usePortfolio } from "@/hooks/use-portfolio";

import styles from "./header-nav-mobile.module.css";

type HeaderNavMobileProps = {
  onClose(): void;
};

export const HeaderNavMobile: React.FC<HeaderNavMobileProps> = ({
  onClose,
}) => {
  const { portfolio } = usePortfolio();
  const { t } = useTranslation();

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.main}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.32, ease: "easeOut" }}
      >
        <button
          type="button"
          className={styles.close_icon}
          aria-label={t("aria.closeMenu")}
          onClick={() => onClose()}
        >
          <CloseIcon />
        </button>
        <LanguageSwitcher />
        <ul className={styles.container_nav}>
          {portfolio.header.navigation.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                aria-label={item.label}
                onClick={() => onClose()}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};
