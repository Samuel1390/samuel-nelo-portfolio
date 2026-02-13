import "./globals.css";

import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Top } from "./components/Top";
import projects from "./projects";

function App() {
  return (
    <div className="general-container w-full max-w-300">
      <Top />
      <Projects projects={projects} />
      <Skills />
      <AboutMe />
    </div>
  );
}
export default App;
