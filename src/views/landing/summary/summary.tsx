import { portfolio } from "@/data";
import { Button } from "@/components/UI";
import styles from "./summary.module.css";

export const Summary = () => {
  const {
    headerTaglineOne,
    headerTaglineTwo,
    headerTaglineThree,
    headerTaglineFour,
  } = portfolio.section_summary;

  return (
    <section id="summary" className={styles.bg_summary}>
      <div className={styles.container}>
        <div className={styles.summary_main}>
          <p className={`text text-grey ${styles.hello}`}>
            {headerTaglineOne} {headerTaglineTwo}
          </p>
          <h2 className="text text-h1">{headerTaglineThree}</h2>
          <div className={styles.container_desc_btns}>
            <p className={`text text-grey ${styles.description_summary}`}>
              {headerTaglineFour}
            </p>
            <div className={styles.buttons}>
              <Button
                aria-label="ver mis proyectos"
                className={styles.button}
                label="Ver mis proyectos"
                variant="outlined"
                onClick={() => (window.location.href = "#personal_projects")}
              />
              <Button
                aria-label="Más sobre mí"
                className={styles.button}
                label="Más sobre mí"
                variant="secondary"
                onClick={() => (window.location.href = "#about")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
