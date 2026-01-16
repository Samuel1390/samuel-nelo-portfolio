import "./Skills.css";
import "../globals.css";
import { IoMicSharp } from "react-icons/io5";
import { VscDebug } from "react-icons/vsc";
import { MdLanguage } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { PiGraphBold } from "react-icons/pi";
import { FaHandsHelping } from "react-icons/fa";
import { TbMathIntegral } from "react-icons/tb";
import { LanguageContext } from "./context/LanguageContext";
import { useContext } from "react";

export function Skills() {
  const { language } = useContext(LanguageContext);
  return (
    <section id="skills-section" className="skills-section font-lato">
      <div className="flex items-center justify-center text-center p-2.5 gap-2.5">
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M120 56c0-30.9 25.1-56 56-56l24 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-32 0c-29.8 0-54.9-20.4-62-48-.7 0-1.3 0-2 0-44.2 0-80-35.8-80-80 0-18 6-34.6 16-48-19.4-14.6-32-37.8-32-64 0-30.9 17.6-57.8 43.2-71.1-7.1-12-11.2-26-11.2-40.9 0-44.2 35.8-80 80-80l0-24zm272 0l0 24c44.2 0 80 35.8 80 80 0 15-4.1 29-11.2 40.9 25.7 13.3 43.2 40.1 43.2 71.1 0 26.2-12.6 49.4-32 64 10 13.4 16 30 16 48 0 44.2-35.8 80-80 80-.7 0-1.3 0-2 0-7.1 27.6-32.2 48-62 48l-32 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32l24 0c30.9 0 56 25.1 56 56z" />
        </svg>
        <h2 className="text-5xl">
          {language === "spanish" ? "Habilidades" : "Skills"}
        </h2>
      </div>
      <div className="skills-flex">
        <div className="skill">
          <div className="skill-title flex gap-2.5 items-center justify-center">
            <PiGraphBold size={28} />
            <h2 className="subtitle">
              {language === "spanish"
                ? "Tecnologías y herramientas"
                : "Technologies and tools"}
            </h2>
          </div>
          <div className="skills-container">
            <HtmlSvg />
            <CssSvg />
            <JsSvg />
            <GitSvg />
            <GithubSvg />
            <TailwindSvg />
            <ReactSvg
              text={
                language === "spanish" ? "Aprendiendo react" : "Learning react"
              }
            />
          </div>
        </div>
        <div className="skill">
          <div className="skill-title gap-2.5 flex justify-center items-center">
            <FaHandsHelping size={28} />
            <h2 className="subtitle">
              {language === "spanish" ? "Habilidades blandas" : "Soft skills"}
            </h2>
          </div>
          <div className="skills-container">
            <SoftSkills />
          </div>
        </div>
      </div>
    </section>
  );
}
export function HtmlSvg({ proyectIcon = false }) {
  return (
    <div
      className="icon-container"
      id={proyectIcon ? "proyect-icon-container" : ""}
    >
      <svg
        className="tech-icon"
        id={proyectIcon ? "proyect-icon-container" : ""}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M0 32L34.9 427.8 191.5 480 349.1 427.8 384 32 0 32zM308.2 159.9l-183.8 0 4.1 49.4 175.6 0-13.6 148.4-97.9 27 0 .3-1.1 0-98.7-27.3-6-75.8 47.7 0 3.5 38.1 53.5 14.5 53.7-14.5 6-62.2-166.9 0-12.8-145.6 241.1 0-4.4 47.7z" />
      </svg>
      <h3>HTML</h3>
    </div>
  );
}
export function CssSvg({ proyectIcon = false }) {
  return (
    <div
      className="icon-container"
      id={proyectIcon ? "proyect-icon-container" : ""}
    >
      <svg
        id={proyectIcon ? "proyect-icon-container" : ""}
        className="tech-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M376.3 32L0 32 0 408.3c0 19 7.6 37.2 21 50.7s31.7 21 50.7 21l304.6 0c19 0 37.2-7.6 50.7-21s21-31.7 21-50.7l0-304.6c0-19-7.6-37.2-21-50.7s-31.7-21-50.7-21zM332.4 431.4c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.5-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-4-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L351.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.5 12.5c7.5 8.4 11.5 20.3 11.8 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4 27.4-12.3 35.7c-8.2 8.3-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-101 0c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.4-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-3.9-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L250.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.4 12.5c7.6 8.4 11.5 20.3 11.9 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4.1 27.4-12.3 35.7s-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-105.6 1.1c-8.4-7.7-12.5-19.2-12.5-34.5l0-75.4c0-15.2 4.4-26.7 13.2-34.6c8.9-7.8 20.7-11.8 35.2-11.8c14.1 0 25.2 4 33.4 12c8.3 8 12.5 20 12.5 35.9l0 6-33.1 0 0-5.8c0-6.1-1.3-10.7-4-13.6c-1.1-1.5-2.6-2.7-4.3-3.5s-3.5-1.2-5.4-1.1c-5.4 0-9.2 1.8-11.4 5.6c-2.3 5.2-3.3 10.8-3 16.4l0 65.5c0 13.7 4.8 20.6 14.4 20.8c4.5 0 7.9-1.6 10.2-4.8c2.5-4.1 3.7-8.8 3.5-13.6l0-4.9 33.1 0 0 5.1c0 10.6-2.1 19.5-6.2 26.6c-4 6.9-9.9 12.5-17.1 16c-7.7 3.7-16.1 5.5-24.6 5.3c-14.2 0-25.5-3.9-33.8-11.6z" />
      </svg>
      CSS
    </div>
  );
}
export function GitSvg() {
  return (
    <div className="icon-container">
      <svg className="tech-icon" xmlns="http://www.w3.org/2000/svg">
        <path d="m21.62 11.108-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.407.29a1.537 1.537 0 0 1 0 2.166 1.536 1.536 0 0 1-2.174 0 1.528 1.528 0 0 1 0-2.164c.152-.15.322-.264.504-.339v-5.49a1.529 1.529 0 0 1-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 0 0 1.821 0l8.69-8.689a1.284 1.284 0 0 0 .003-1.822"></path>
      </svg>
      <h3>Git</h3>
    </div>
  );
}
export function JsSvg({ proyectIcon = false }) {
  return (
    <div
      className="icon-container"
      id={proyectIcon ? "proyect-icon-container" : ""}
    >
      <svg
        id={proyectIcon ? "proyect-icon-container" : ""}
        className="tech-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M0 32l0 448 448 0 0-448-448 0zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5l0-143.1 42.1 0 0 143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
      </svg>
      <h3>Javascript</h3>
    </div>
  );
}
export function GithubSvg() {
  return (
    <div className="icon-container" style={{ margin: "auto" }}>
      <svg
        className="tech-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        viewBox="0 0 48 48"
        id="github"
      >
        <rect rx="24"></rect>
        <path
          fillRule="evenodd"
          d="M31.4225 46.8287C29.0849 47.589 26.5901 48 24 48C21.4081 48 18.9118 47.5884 16.5728 46.8272C17.6533 46.9567 18.0525 46.2532 18.0525 45.6458C18.0525 45.3814 18.048 44.915 18.0419 44.2911C18.035 43.5692 18.0259 42.6364 18.0195 41.5615C11.343 43.0129 9.9345 38.3418 9.9345 38.3418C8.844 35.568 7.2705 34.8294 7.2705 34.8294C5.091 33.3388 7.4355 33.369 7.4355 33.369C9.843 33.5387 11.1105 35.8442 11.1105 35.8442C13.2525 39.5144 16.728 38.4547 18.096 37.8391C18.3135 36.2871 18.9345 35.2286 19.62 34.6283C14.2905 34.022 8.688 31.9625 8.688 22.7597C8.688 20.1373 9.6225 17.994 11.1585 16.3142C10.911 15.7065 10.0875 13.2657 11.3925 9.95888C11.3925 9.95888 13.4085 9.31336 17.9925 12.4206C19.908 11.8876 21.96 11.6222 24.0015 11.6114C26.04 11.6218 28.0935 11.8876 30.0105 12.4206C34.5915 9.31336 36.603 9.95888 36.603 9.95888C37.9125 13.2657 37.089 15.7065 36.8415 16.3142C38.3805 17.994 39.309 20.1373 39.309 22.7597C39.309 31.9849 33.6975 34.0161 28.3515 34.6104C29.2125 35.3519 29.9805 36.8168 29.9805 39.058C29.9805 41.2049 29.9671 43.0739 29.9582 44.3125C29.9538 44.9261 29.9505 45.385 29.9505 45.6462C29.9505 46.2564 30.3401 46.9613 31.4225 46.8287Z"
          clipRule="evenodd"
        ></path>
      </svg>
      <h3>Github</h3>
    </div>
  );
}
export function ReactSvg({ proyectIcon, hidden, text = "React" }) {
  return (
    <div
      hidden={hidden}
      className="icon-container"
      id={proyectIcon ? "proyect-icon-container" : ""}
    >
      <svg
        className="tech-icon"
        id={proyectIcon ? "proyect-icon-container" : ""}
        viewBox="-10.5 -9.45 21 18.9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          srtroke="currentColor"
          cx="0"
          cy="0"
          r="2"
          fill="currentColor"
        ></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
      </svg>
      <h3 className={text === "React" ? "" : "text-amber-400"}>{text}</h3>
    </div>
  );
}
export function TailwindSvg({ proyectIcon, hidden, text = "Tailwindcss" }) {
  return (
    <div
      hidden={hidden}
      className="icon-container"
      id={proyectIcon ? "proyect-icon-container" : ""}
    >
      <svg
        className="tech-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173a3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.73 5.73 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921c-.969 1.379-2.44 2.207-4.259 1.231c-1.253-.673-2.19-3.438-5.959-3.318M6.8 11.979A4.77 4.77 0 0 0 2 16.151a3.43 3.43 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.73 5.73 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921c-.97 1.379-2.44 2.208-4.259 1.231c-1.253-.673-2.19-3.443-5.963-3.317"
        />
      </svg>
      <h3 className={""}>{text}</h3>
    </div>
  );
}
function SoftSkills() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="skills-container">
      <div className="icon-container">
        <IoMicSharp size={26} />
        <h3>
          {language === "spanish"
            ? "Oratoria y comunicación efectiva"
            : "Public speaking and effective communication"}
        </h3>
      </div>
      <div className="icon-container">
        <MdLanguage size={26} />
        <h3>
          {language === "spanish"
            ? "Inglés (intermedio)"
            : "English (intermediate)"}
        </h3>
      </div>
      <div className="icon-container">
        <VscDebug size={26} />
        <h3>
          {language === "spanish"
            ? "resolución de problemas"
            : "problem solving"}
        </h3>
      </div>
      <div className="icon-container">
        <RiLightbulbFlashLine size={26} />
        <h3>
          {language === "spanish"
            ? "Creatividad e innovación"
            : "Creativity and innovation"}
        </h3>
      </div>
      <div className="icon-container">
        <TbMathIntegral size={26} />
        <h3>
          {language === "spanish"
            ? "Cálculo diferencial e integral"
            : "Differential and integral calculus"}
        </h3>
      </div>
    </div>
  );
}
