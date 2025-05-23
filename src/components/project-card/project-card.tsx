import { Chip } from "../UI";

import styles from "./project-card.module.css";

type ProjectCard = {
  path: string;
  url_banner: string;
  name: string;
  description: string;
  technologies_used?: string[];
};

export const ProjectCard = (props: ProjectCard) => (
  <figure className={styles.container_figure}>
    <a
      href={props.path}
      target="_black"
      rel="noopener noreferrer"
      aria-label={props.description}
    />
    <div className={styles.container_img}>
      <img src={props.url_banner} alt={`card-${props.name}`} loading="lazy" />
    </div>
    <figcaption className={styles.figcaption}>
      <h3 className="text-h2">{props.name}</h3>
      <p>{props.description}</p>
      {props.technologies_used && (
        <div className={styles.container_chips}>
          {props.technologies_used.map((technology, index) => (
            <Chip key={`${index}-${technology}`} label={technology} />
          ))}
        </div>
      )}
    </figcaption>
  </figure>
);
