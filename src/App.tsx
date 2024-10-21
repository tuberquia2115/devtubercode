import { Header } from "./components/header/header";
import { SectionSummary, SectionProjects } from "@/containers";

function App() {
  return (
    <div>
      <Header />
      <article>
        <SectionSummary />
        <SectionProjects />
      </article>
    </div>
  );
}

export default App;
