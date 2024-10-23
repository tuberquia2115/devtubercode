import { portfolio } from "@/data";
import styles from "./logo.module.css";

type LogoProps = {
  withLogan?: boolean;
  size?: string;
};

export const Logo = (props: LogoProps) => {
  const { name, subLogan, src } = portfolio.header.info_logo;
  return (
    <div
      className={styles.container}
      style={{ gap: props.withLogan ? "16px" : 0 }}
    >
      <a href="summary">
        <div className={styles.container_logo}>
          <div
            className={styles.container_img}
            style={{ width: props.size || 50, height: props.size || 50 }}
          >
            <img src={src} alt="logo" />
          </div>
          <p>{name}</p>
        </div>
      </a>
      {props.withLogan && <p>{subLogan}</p>}
    </div>
  );
};
