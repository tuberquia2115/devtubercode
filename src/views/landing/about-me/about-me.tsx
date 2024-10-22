import { Button } from "@/components";
import styles from "./about-me.module.css";

import CV_ES from "@/assets/cv-es.pdf";
import CV_EN from "@/assets/cv-en.pdf";
import { portfolio } from "@/data";

export const AboutMe = () => {
  const handleDownloadCv = (language: "es" | "en") => {
    const anchor = document.createElement("a");
    anchor.href = language === "es" ? CV_ES : CV_EN;
    anchor.download = "Jose_Manuel_Tuberquia_Frontend_Developer";
    anchor.click();
  };

  return (
    <section id="about" className="container">
      <div className="grid" style={{ paddingInline: 20 }}>
        <div className="gap-3">
          <div className="gap-0-5">
            <p className="text text-h5 text-secondary">
              {portfolio.section_aboutme.title}
            </p>
            <h2 className="text text-h2">
              {portfolio.section_aboutme.subtitle}
            </h2>
            <div className="text text-gray gap-1">
              <p>{portfolio.section_aboutme.description}</p>
            </div>
            <div className={styles.buttons_cv}>
              <Button
                label="🖨️ CV ES"
                variant="secondary"
                onClick={() => handleDownloadCv("es")}
              />
              <Button
                label="🖨️ CV EN"
                variant="secondary"
                onClick={() => handleDownloadCv("en")}
              />
            </div>
          </div>
        </div>
        <div className="gap-3">
          <figure className={styles.container_figure}>
            <img
              src={portfolio.section_aboutme.profile_url}
              alt="about-me-profile"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
