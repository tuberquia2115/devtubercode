import { ReactNode } from "react";
import { portfolio } from "@/data";
import styles from "./contact.module.css";
import { EmailIcon, LinkedinIcon } from "@/components/icons";

type ButtonType = { [key: string]: { icon: ReactNode; btn_hover: string } };

export const Contact = () => {
  const buttons: ButtonType = {
    email: {
      icon: <EmailIcon />,
      btn_hover: styles.btn_hover_email,
    },
    linkedin: {
      icon: <LinkedinIcon />,
      btn_hover: styles.btn_hover_linkedin,
    },
  };

  return (
    <section id="contact" className="container">
      <div>
        <div className="gap-0-5">
          <p className="text text-h5 text-secondary">
            {portfolio.section_contact.title}
          </p>
          <h2 className="text text-h2">{portfolio.section_contact.subtitle}</h2>
          {portfolio.section_contact.available && (
            <p className="text text-green">
              <span className="pulse" />
              {portfolio.section_contact.available_message}
            </p>
          )}
        </div>
        <div className={`text text-grey ${styles.container_description}`}>
          <p>{portfolio.section_contact.description_one}</p>
          <p>{portfolio.section_contact.description_two}</p>
        </div>
      </div>

      <div className={`${styles.container_buttons}`}>
        {portfolio.section_contact.contacts_media.map((media) => (
          <button
            key={media.title}
            className={`${styles.container_button} ${
              buttons[media.title].btn_hover
            }`}
          >
            <a
              href={media.value}
              className={styles.href}
              target="_black"
              rel="noopener noreferrer"
            />
            {buttons[media.title].icon}

            <div className={styles.container_labels}>
              <p>{media.title}</p>
              <p>{media.label}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
