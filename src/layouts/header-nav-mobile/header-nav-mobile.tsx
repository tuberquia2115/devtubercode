import { portfolio } from "@/data";
import { CloseIcon } from "@/components";
import styles from "./header-nav-mobile.module.css";

type HeaderNavMobileProps = {
  onClose(): void;
};

export const HeaderNavMobile: React.FC<HeaderNavMobileProps> = ({
  onClose,
}) => (
  <div className={styles.container}>
    <div className={styles.main}>
      <div className={styles.close_icon} onClick={() => onClose()}>
        <CloseIcon />
      </div>
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
    </div>
  </div>
);
