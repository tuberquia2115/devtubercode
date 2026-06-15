import styles from "./header.module.css";
import { LanguageSwitcher, Logo, MenuIcon } from "@/components";
import React, { useState } from "react";
import { HeaderNavMobile } from "@/layouts";
import { usePortfolio } from "@/hooks/use-portfolio";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { portfolio } = usePortfolio();
  const { t } = useTranslation();

  const onCloseMenu = () => setShowMenu(false);
  const onShowMenu = () => setShowMenu(true);

  return (
    <React.Fragment>
      <AnimatePresence>
        {showMenu && <HeaderNavMobile onClose={onCloseMenu} />}
      </AnimatePresence>
      <motion.header
        className={styles.header}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className={styles.container_header}>
          <Logo />
          <nav className={styles.nav}>
            <ul>
              {portfolio.header.navigation.map((item) => (
                <li key={item.id}>
                  <a href={item.path} aria-label={item.label}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.header_actions}>
            <LanguageSwitcher />
          </div>
          <button
            type="button"
            className={styles.menu_icon}
            aria-label={t("aria.openMenu")}
            onClick={onShowMenu}
          >
            <MenuIcon />
          </button>
        </div>
      </motion.header>
    </React.Fragment>
  );
};
