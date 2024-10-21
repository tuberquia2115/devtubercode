import { portfolio } from "@/data";
import styles from "./section-summary.module.css";
import stylesGlobals from "@/styles/globals.module.css";
import { Button } from "@/components/UI";

export const SectionSummary = () => {
  return (
    <section className={styles.section_summary}>
      <div className={`${stylesGlobals.container} `}>
        <div className={styles.summary_main}>
          <p className={styles.hello}>
            {portfolio.headerTaglineOne} {portfolio.headerTaglineTwo}
          </p>
          <h2 className={styles.role}>{portfolio.headerTaglineThree}</h2>

          <div className={styles.container_desc_btns}>
            <p className={styles.description_summary}>
              {portfolio.headerTaglineFour}
            </p>
            <div className={styles.buttons}>
              <Button label="Ver mis proyectos" variant="secondary" />
              <Button label="Más sobre mí" variant="outlined" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
