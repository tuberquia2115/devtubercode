import { portfolio } from "@/data";
import { ProjectCard } from "@/components";
import styles from "./personal-projects.module.css";

export const PersonalProjects = () => (
  <section id="personal_projects">
    <div className="container">
      <div className={styles.container_header_section}>
        <h1 className="text text-h5 text-secondary">
          {portfolio.section_personal_projects.title}
        </h1>
        <h2 className="text text-h2">
          {portfolio.section_personal_projects.subtitle}
        </h2>
        <div
          className="text text-grey"
          dangerouslySetInnerHTML={{
            __html: portfolio.section_personal_projects.description,
          }}
        />
      </div>
      <div className={`grid ${styles.container_projects}`}>
        {portfolio.section_personal_projects.projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  </section>
);
