import "./globals.css";

import { AboutMe } from "./components/aboutMe/AboutMe";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/Projects";
import { Top } from "./components/top/Top";
import projects from "./projects";
import MeshGradientBackgroundDemo from "../components/ui/mesh-gradient";

function App() {
  return (
    <div className="general-container w-screen max-w-300 overflow-x-hidden">
      <MeshGradientBackgroundDemo />
      <Top />
      <Projects projects={projects} />
      <Skills />
      <AboutMe />
    </div>
  );
}
export default App;
