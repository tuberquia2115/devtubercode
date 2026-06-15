import {
  Code2,
  LayoutTemplate,
  MessageCircle,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components";
import { usePortfolio } from "@/hooks/use-portfolio";

import styles from "./services.module.css";

const icons = {
  code: Code2,
  layout: LayoutTemplate,
  smartphone: Smartphone,
  sparkles: Sparkles,
  wrench: Wrench,
};

export const Services = () => {
  const shouldReduceMotion = useReducedMotion();
  const { portfolio } = usePortfolio();
  const { cta, description, services, subtitle, title } =
    portfolio.section_services;

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="text text-h5 text-secondary">{title}</p>
          <h2 className="text text-h2">{subtitle}</h2>
          <p className="text text-grey">{description}</p>
        </motion.div>
        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons] || Code2;

            return (
              <motion.article
                key={service.title}
                className={styles.card}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                  duration: 0.42,
                  ease: "easeOut",
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -7 }}
              >
                <div className={styles.icon}>
                  <Icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.article>
            );
          })}
        </div>
        <div className={styles.cta}>
          <Button
            icon={<MessageCircle size={18} />}
            label={cta}
            variant="secondary"
            onClick={() => (window.location.href = "#contact")}
          />
        </div>
      </div>
    </section>
  );
};
