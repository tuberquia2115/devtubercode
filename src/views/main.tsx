import { lazy, Suspense } from "react";
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

export const Main = () => (
  <main>
    <Header />
    <article>
      <Summary />
      <Suspense fallback={<p>Loading...</p>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <AboutMe />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <PersonalProjects />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Contact />
      </Suspense>
    </article>
    <Footer />
  </main>
);
