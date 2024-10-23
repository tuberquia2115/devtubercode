import { Chip } from "../UI";

import styles from "./project-card.module.css";

type ProjectCard = {
  path: string;
  url_banner: string;
  name: string;
  description: string;
  technologies_used: string[];
};

export const ProjectCard = (props: ProjectCard) => (
  <figure className={styles.container_figure}>
    <a href={props.path} target="_black" rel="noopener noreferrer" />
    <div className={styles.container_img}>
      <img src={props.url_banner} alt={`card-${props.name}`} />
    </div>
    <figcaption className={styles.figcaption}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div className={styles.container_chips}>
        {props.technologies_used.map((technology) => (
          <Chip key={technology} label={technology} />
        ))}
      </div>
    </figcaption>
  </figure>
);