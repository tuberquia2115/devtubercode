import { portfolio } from "@/data";

import styles from "./header.module.css";
import { Logo } from "../../components/logo";

export const Header = () => {
  return (
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
      </div>
    </header>
  );
};
