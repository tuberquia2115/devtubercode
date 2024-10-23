import { portfolio } from "@/data";
import styles from "./projects.module.css";

import { ProjectCard } from "@/components";

export const Projects = () => {
  const { projects } = portfolio.section_projects;

  return (
    <section id="projects" className={styles.section_projects}>
      <div className="container grid">
        <div className={styles.container_column}>
          <div className={styles.container_header_section}>
            <h1 className="text text-h5 text-secondary">
              {portfolio.section_projects.title}
            </h1>
            <h2 className="text text-h2">
              {portfolio.section_projects.subtitle}
            </h2>
            <p className="text text-grey">
              {portfolio.section_projects.description}
            </p>
          </div>
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
        <div className={styles.container_column}>
          {projects.slice(3).map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
