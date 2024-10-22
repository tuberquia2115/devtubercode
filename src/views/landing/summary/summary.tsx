import { portfolio } from "@/data";
import { Button } from "@/components/UI";
import styles from "./summary.module.css";

export const Summary = () => {
  return (
    <section className="bg-summary">
      <div className="container">
        <div className={styles.summary_main}>
          <p className={`text text-gray ${styles.hello}`}>
            {portfolio.headerTaglineOne} {portfolio.headerTaglineTwo}
          </p>
          <h2 className="text text-h1">{portfolio.headerTaglineThree}</h2>

          <div className={styles.container_desc_btns}>
            <p className={`text text-gray ${styles.description_summary}`}>
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
