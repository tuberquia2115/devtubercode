import { useId, useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";

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
  const shouldReduceMotion = useReducedMotion();
  const { t } = useTranslation();
  const descriptionId = useId();
  const canExpand = props.description.length > 380;
  const toggleDescription = () =>
    setIsExpanded((currentValue) => !currentValue);

  return (
    <motion.figure
      className={styles.container_figure}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
    >
      {props.path && (
        <a
          href={props.path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("projectCard.viewProject", { name: props.name })}
        />
      )}
      <div className={styles.container_img}>
        <img src={props.url_banner} alt={`card-${props.name}`} loading="lazy" />
      </div>
      <figcaption className={styles.figcaption}>
        <div className={styles.card_header}>
          <h3 className="text-h2">{props.name}</h3>
          {props.path && <ExternalLink size={18} aria-hidden="true" />}
        </div>
        {canExpand && isExpanded && (
          <button
            type="button"
            className={`${styles.toggle_description} ${styles.toggle_description_top}`}
            aria-expanded={isExpanded}
            aria-controls={descriptionId}
            onClick={toggleDescription}
          >
            <span>{t("projectCard.viewLess")}</span>
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
            <span>
              {isExpanded
                ? t("projectCard.viewLess")
                : t("projectCard.viewMore")}
            </span>
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
    </motion.figure>
  );
};
