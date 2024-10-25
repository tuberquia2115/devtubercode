import React from "react";
import { portfolio } from "@/data";
import styles from "./footer.module.css";
import { Divider, Logo } from "@/components";
import {
  GithubIcon,
  LinkedinIcon,
  StackOverflowIcon,
  GitlabIcon,
} from "@/components/icons";

type LinkType = {
  label: string;
  url: string;
  icon?: string;
};

type IconsType = {
  [key: string]: React.ReactNode;
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const icons: IconsType = {
    github: <GithubIcon />,
    gitlab: <GitlabIcon />,
    linkedin: <LinkedinIcon />,
    stackOverflow: <StackOverflowIcon />,
  };

  return (
    <footer className={styles.footer}>
      <div className="container gap-2">
        <div className={styles.footer_main}>
          <div className={styles.container_footer_navigation}>
            {portfolio.footer.linkList.map(({ title, links }) => (
              <div key={title}>
                <h1 className="text-h2">{title}</h1>
                <Divider height={2} color="var(--secondary)" />
                <ul className={styles.container_links}>
                  {(links as LinkType[]).map((link) => (
                    <li key={link.label} className={styles.container_link}>
                      {link.icon && icons[link.icon]}
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Logo withLogan={true} />
        </div>
        <Divider height={2} color="var(--secondary)" />
        <div className={styles.container_footer_bottom}>
          <div>
            <p>
              &copy; {currentYear}. {portfolio.footer.bottom.copy_right}
            </p>
          </div>
          <div>
            <p>{portfolio.footer.bottom.done_message}</p>
            <p>{portfolio.footer.bottom.create_by}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
