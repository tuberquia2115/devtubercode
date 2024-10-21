import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.container_img}>
        <img src="/assets/logo.png" alt="devTuberCode" />
      </div>
      <p>devTuberCode</p>
    </div>
  );
};
