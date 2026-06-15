import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { usePortfolio } from "@/hooks/use-portfolio";
import styles from "./contact.module.css";
import { EmailIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

type ButtonType = { [key: string]: { icon: ReactNode; btn_hover: string } };

export const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
  const { portfolio } = usePortfolio();
  const buttons: ButtonType = {
    email: {
      icon: <EmailIcon />,
      btn_hover: styles.btn_hover_email,
    },
    linkedin: {
      icon: <LinkedinIcon />,
      btn_hover: styles.btn_hover_linkedin,
    },
    whatsapp: {
      icon: <WhatsappIcon />,
      btn_hover: styles.btn_hover_whatsapp,
    },
  };

  return (
    <motion.section
      id="contact"
      className="container"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
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
            aria-label={media.label}
          >
            <a
              href={media.value}
              className={styles.href}
              target="_blank"
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
    </motion.section>
  );
};
