import { Header } from "@/layouts";
import { Summary, Projects, AboutMe } from "./landing";

export const Main = () => (
  <main>
    <Header />
    <article>
      <Summary />
      <Projects />
      <AboutMe />
    </article>
  </main>
);
