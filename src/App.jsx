import "./globals.css";

import { AboutMe } from "./components/aboutMe/AboutMe";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/Projects";
import { Top } from "./components/top/Top";
import projects from "./projects";

function App() {
  return (
    <div className="general-container w-screen max-w-300 overflow-x-hidden">
      <Top />
      <Projects projects={projects} />
      <Skills />
      <AboutMe />
    </div>
  );
}
export default App;
