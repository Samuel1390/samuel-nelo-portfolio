import { HtmlSvg, JsSvg, CssSvg, ReactSvg, TailwindSvg } from "./Skills";
import { FaCode } from "react-icons/fa";

import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

import { FiCodesandbox } from "react-icons/fi";

import "../globals.css";
export function Proyects({ proyects }) {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  return (
    <section
      id="proyects-section"
      className="proyects-section flex items-center flex-col"
    >
      <div className="flex items-center  justify-center text-center p-2.5 gap-2.5">
        <FaCode size={38} />
        <h2 className="text-5xl">
          {language === "spanish" ? "Proyectos" : "Projects"}
        </h2>
      </div>
      <div className="proyects-container flex-wrap justify-center flex w-full p-4 gap-4">
        {proyects.map((proyect) => {
          const {
            title,
            image,
            proyectDescription,
            proyectDescriptionEn,
            typeDescription,
            typeDescriptionEn,
            pageLink,
            codeSource,
            technologies,
          } = proyect;
          return (
            <div
              key={title}
              className=" proyect flex flex-col grow basis-44 max-w-70 bg-neutral-50 border-neutral-50 border gap-2"
            >
              <picture className="proyects-picture w-full h-40 overflow-hidden">
                <img
                  className="proyect-img size-full object-cover"
                  src={image}
                  alt={`imagen de la página de ${
                    title + " " + language === "spanish"
                      ? proyectDescription
                      : proyectDescriptionEn
                  }`}
                />
              </picture>
              <div className="flex justify-between flex-col items-center">
                <div className="p-2.5 font-lato">
                  <div className="proyect-text flex flex-col">
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
                          ? proyectDescription
                          : proyectDescriptionEn}
                      </p>
                      <p className="text-[.9rem] my-4 text-slate-600">
                        {language === "spanish"
                          ? typeDescription
                          : typeDescriptionEn}
                      </p>
                    </div>
                    <span className="bg-teal-400/50 px-2 py-2 rounded-sm text-zinc-950 border-teal-950 border-l-4">
                      Ir al
                      <a
                        className="ml-1 text-teal-950 underline font-bold"
                        href={codeSource}
                        rel="noopener"
                        target="_blank"
                      >
                        {language === "spanish"
                          ? "código fuente"
                          : "source code"}
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center self-end flex-col text-center p-2.5 gap-2">
                    <FiCodesandbox />
                    <h2 className="text-2xl font-bold text-zinc-900">
                      {language === "spanish" ? "Tecnologías" : "Technologies"}
                    </h2>
                    <div className="skills-container">
                      <HtmlSvg proyectIcon={true} />
                      <CssSvg proyectIcon={true} />
                      <JsSvg proyectIcon={true} />
                      <TailwindSvg
                        proyectIcon={true}
                        hidden={
                          technologies.includes("tailwind") ? false : true
                        }
                      />
                      <ReactSvg
                        proyectIcon={true}
                        hidden={technologies.includes("react") ? false : true}
                      />
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
