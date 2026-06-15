import { useId, useState } from "react";

import { Chip } from "../UI";

import styles from "./project-card.module.css";

type ProjectCard = {
  path?: string;
  url_banner: string;
  name: string;
  description: string;
  technologies_used?: string[];
};

export const ProjectCard = (props: ProjectCard) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionId = useId();
  const canExpand = props.description.length > 380;
  const toggleDescription = () =>
    setIsExpanded((currentValue) => !currentValue);

  return (
    <figure className={styles.container_figure}>
      {props.path && (
        <a
          href={props.path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver proyecto ${props.name}`}
        />
      )}
      <div className={styles.container_img}>
        <img src={props.url_banner} alt={`card-${props.name}`} loading="lazy" />
      </div>
      <figcaption className={styles.figcaption}>
        <h3 className="text-h2">{props.name}</h3>
        {canExpand && isExpanded && (
          <button
            type="button"
            className={`${styles.toggle_description} ${styles.toggle_description_top}`}
            aria-expanded={isExpanded}
            aria-controls={descriptionId}
            onClick={toggleDescription}
          >
            <span>Ver menos</span>
            <span
              className={`${styles.toggle_icon} ${styles.toggle_icon_expanded}`}
              aria-hidden="true"
            />
          </button>
        )}
        <div
          id={descriptionId}
          className={`${styles.description_content} project-description ${
            canExpand && !isExpanded ? styles.description_collapsed : ""
          }`}
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
        {canExpand && (
          <button
            type="button"
            className={styles.toggle_description}
            aria-expanded={isExpanded}
            aria-controls={descriptionId}
            onClick={toggleDescription}
          >
            <span>{isExpanded ? "Ver menos" : "Ver más información"}</span>
            <span
              className={`${styles.toggle_icon} ${
                isExpanded ? styles.toggle_icon_expanded : ""
              }`}
              aria-hidden="true"
            />
          </button>
        )}
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
};
