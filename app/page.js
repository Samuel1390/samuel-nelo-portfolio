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
      <div className="w-screen grid place-content-center max-w-[1200px] mx-auto">
        <Top />
      </div>
      <Projects projects={projects} />
      <Skills />
      <AboutMe />
    </div>
  );
}
export default App;
