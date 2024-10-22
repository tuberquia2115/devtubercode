import { portfolio } from "@/data";
import styles from "./projects.module.css";

import { ProjectCard } from "@/components";

export const Projects = () => {
  const { projects } = portfolio.section_projects;

  return (
    <section id="projects" className={styles.section_projects}>
      <div className="container grid border-button">
        <div className={styles.container_column}>
          <div className={styles.container_header_section}>
            <h1 className="text text-h5 text-secondary">
              {portfolio.section_projects.title}
            </h1>
            <h2 className="text text-h2">
              {portfolio.section_projects.subtitle}
            </h2>
            <p className="text text-gray">
              {portfolio.section_projects.description}
            </p>
          </div>
          {projects.slice(0, 3).map(ProjectCard)}
        </div>
        <div className={styles.container_column}>
          {projects.slice(3).map(ProjectCard)}
        </div>
      </div>
    </section>
  );
};
