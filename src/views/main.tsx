import { Footer, Header } from "@/layouts";
import {
  Summary,
  Projects,
  AboutMe,
  PersonalProjects,
  Contact,
} from "./landing";

export const Main = () => (
  <main>
    <Header />
    <article>
      <Summary />
      <Projects />
      <AboutMe />
      <PersonalProjects />
      <Contact />
    </article>
    <Footer />
  </main>
);
