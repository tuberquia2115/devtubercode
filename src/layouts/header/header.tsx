import { portfolio } from "@/data";

import styles from "./header.module.css";
import { MenuIcon, Logo } from "@/components";
import React, { useState } from "react";
import { HeaderNavMobile } from "@/layouts";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onCloseMenu = () => setShowMenu(false);
  const onShowMenu = () => setShowMenu(true);

  return (
    <React.Fragment>
      {showMenu && <HeaderNavMobile onClose={onCloseMenu} />}
      <header className={styles.header}>
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
          <div className={styles.menu_icon} onClick={onShowMenu}>
            <MenuIcon />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
