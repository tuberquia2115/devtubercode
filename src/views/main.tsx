import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Footer, Header } from "@/layouts";
import { Summary } from "./landing";

// Lazy load components
const Projects = lazy(() =>
  import("./landing/projects/projects").then((module) => ({
    default: module.Projects,
  }))
);
const AboutMe = lazy(() =>
  import("./landing/about-me/about-me").then((module) => ({
    default: module.AboutMe,
  }))
);
const Services = lazy(() =>
  import("./landing/services/services").then((module) => ({
    default: module.Services,
  }))
);
const PersonalProjects = lazy(() =>
  import("./landing/personal-projects/personal-projects").then((module) => ({
    default: module.PersonalProjects,
  }))
);
const Contact = lazy(() =>
  import("./landing/contact/contact").then((module) => ({
    default: module.Contact,
  }))
);

export const Main = () => {
  const { t } = useTranslation();
  const fallback = <p className="container">{t("common.loading")}</p>;

  return (
    <main>
      <Header />
      <article>
        <Summary />
        <Suspense fallback={fallback}>
          <Projects />
        </Suspense>
        <Suspense fallback={fallback}>
          <Services />
        </Suspense>
        <Suspense fallback={fallback}>
          <AboutMe />
        </Suspense>
        <Suspense fallback={fallback}>
          <PersonalProjects />
        </Suspense>
        <Suspense fallback={fallback}>
          <Contact />
        </Suspense>
      </article>
      <Footer />
    </main>
  );
};
