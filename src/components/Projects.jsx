import {
  IconContainer,
  HtmlSvg,
  JsSvg,
  CssSvg,
  ReactSvg,
  TailwindSvg,
  TypescriptSvg,
} from "./Icons";
import { FaCode } from "react-icons/fa";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { FiCodesandbox } from "react-icons/fi";
import "../globals.css";

const ICONS = {
  html: <HtmlSvg />,
  css: <CssSvg />,
  javascript: <JsSvg />,
  react: <ReactSvg />,
  tailwind: <TailwindSvg />,
  typescript: <TypescriptSvg />,
};

export function Projects({ projects }) {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  return (
    <section
      id="projects-section"
      className="projects-section flex items-center flex-col"
    >
      <div className="flex items-center flex-col justify-center text-center p-2.5 gap-2.5">
        <h2 className="text-gradient text-5xl  text-neutral-100">
          {language === "spanish" ? "Projectos" : "Projects"}
        </h2>
        <FaCode size={70} />
      </div>
      <div className="projects-container flex-wrap justify-center flex w-full p-4 gap-4">
        {projects.map((project) => {
          const {
            title,
            image,
            projectDescription,
            projectDescriptionEn,
            typeDescription,
            typeDescriptionEn,
            pageLink,
            codeSource,
            technologies,
          } = project;
          return (
            <div
              key={title} // projects section
              className="project flex flex-col grow basis-44 max-w-70 bg-neutral-50 border-neutral-50 border gap-2"
            >
              <picture className="projects-picture w-full h-40 overflow-hidden">
                <img
                  loading="lazy"
                  className="project-img size-full object-cover"
                  src={image}
                  alt={`imagen de la página de ${
                    title + " " + language === "spanish"
                      ? projectDescription
                      : projectDescriptionEn
                  }`}
                />
              </picture>
              <div className="flex grow justify-between flex-col items-center">
                <div className="p-2.5 font-lato">
                  <div className="project-text flex flex-col">
                    <div>
                      <a
                        href={pageLink}
                        rel="noopener"
                        target="_blank"
                        className="hover:text-sky-400 my-8 text-sky-700 underline text-3xl font-semibold"
                      >
                        {title}
                      </a>
                      <p className="text-slate-800 pt-4">
                        {language === "spanish"
                          ? projectDescription
                          : projectDescriptionEn}
                      </p>
                      <p className="text-[.9rem] my-4 text-slate-600">
                        {language === "spanish"
                          ? typeDescription
                          : typeDescriptionEn}
                      </p>
                    </div>
                    <span className="bg-teal-400/50 px-2 py-2 rounded-sm text-zinc-950 border-teal-950 border-l-4">
                      {language === "spanish" ? "Ir al " : "go to the "}
                      <a
                        className="ml-1 text-teal-950 underline font-bold"
                        href={codeSource}
                        rel="noopener"
                        target="_blank"
                      >
                        {language === "spanish" ? "repositorio" : "repository"}
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center flex-col text-center p-2.5 gap-2">
                    <div className="gap-4 flex items-center justify-center">
                      <h2 className="text-2xl font-bold text-zinc-900">
                        {language === "spanish"
                          ? "Tecnologías"
                          : "Technologies"}
                      </h2>
                      <FiCodesandbox className="text-gray-900" />
                    </div>
                    <div className="skills-container">
                      {technologies.map((tech) => {
                        return (
                          <IconContainer projectIcon={true} name={tech}>
                            {ICONS[tech]}
                          </IconContainer>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
