"use client";
import { FaGraduationCap } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { LanguageContext } from "../context/LanguageContext";
import AchievementsDesktop from "./Achivements";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useContext, useState } from "react";
import AIWorkflow from "./AiWorkflow";
import Image from "next/image";

import "./AboutMe.css";
const paragraphs = {
  EsAboutMe:
    "Desarrollador Front-End apasionado por crear experiencias digitales que combinen funcionalidad y diseño. Mi viaje en la programación comenzó con curiosidad y se transformó en una dedicación constante por aprender y mejorar cada día.",
  EnAboutMe:
    "Passionate Front-End Developer dedicated to crafting digital experiences that blend functionality and design. My programming journey started with curiosity and has evolved into a steadfast commitment to learning and improving every day.",
  EsFormation:
    "Combino estudios formales en la Universidad de Carabobo con aprendizaje autodidacta continuo. Me especializo en tecnologías web fundamentales (HTML5, CSS3, JavaScript ES6+) y actualmente afino mis habilidades en React. Aprendo tanto de documentación oficial como de referentes de la comunidad hispanohablante.",
  EnFormation:
    "I combine formal studies at the University of Carabobo with continuous self-learning. I specialize in fundamental web technologies (HTML5, CSS3, JavaScript ES6+) and am currently honing my skills in React. I learn from both official documentation and references from the Spanish-speaking community.",
  EsObjectives:
    "Mis reglas de oro en el desarrollo se basan en tres pilares: escribir código mantenible y eficiente, crear interfaces intuitivas con excelente rendimiento, y colaborar en equipos para construir proyectos más grandes. Busco siempre el equilibrio entre estética y funcionalidad.",
  EnObjectives:
    "My golden rules in development are based on three pillars: writing maintainable and efficient code, creating intuitive interfaces with excellent performance, and collaborating in teams to build larger projects. I always seek the balance between aesthetics and functionality.",
};

export function AboutMe() {
  const [refContainer, containerIsVisible] = useIntersectionObserver({
    threshold: 0.2,
  });
  const [refTitle, titleIsVisible] = useIntersectionObserver({
    threshold: 0.2,
  });
  const { language } = useContext(LanguageContext);
  const [canvasActive, setCanvasActive] = useState(false);
  return (
    <section>
      <h2
        ref={refTitle}
        className={`text-gradient text-center my-10 text-5xl font-lato
          text-neutral-100 ${titleIsVisible ? "animate-fade-in-down" : "opacity-0"}`}
      >
        {language === "spanish" ? "Acerca de mí" : "About me"}
      </h2>
      <article
        ref={refContainer}
        id="about-me-section"
        className={`
    place-content-center p-0
    flex justify-center ${containerIsVisible ? "animate-fade-in-up" : "opacity-0"} `}
      >
        <div className="about-section border border-solid border-neutral-50 flex grow-{1} font-lato bg-(--dark-color3) h-full">
          <section className="about-me-section">
            <div className="about-text-container max-w-120 p-10 text-center">
              <div className="icon-div">
                <h2 className="subtitle">
                  {language === "spanish" ? "Acerca de mí" : "About Me"}
                </h2>
                <IoPerson size={28} />
              </div>
              <p className="text">
                {language === "spanish"
                  ? paragraphs.EsAboutMe
                  : paragraphs.EnAboutMe}
              </p>
              <div className="icon-div">
                <h2 className="subtitle">
                  {language === "spanish" ? "Formación" : "Formation"}
                </h2>
                <FaGraduationCap size={28} />
              </div>
              <p className="text">
                {language === "spanish"
                  ? paragraphs.EsFormation
                  : paragraphs.EnFormation}
              </p>
              <div className="icon-div">
                <h2 className="subtitle">
                  {language === "spanish" ? "Objetivos" : "Objectives"}
                </h2>
                <TbTargetArrow size={28} />
              </div>
              <p className="text">
                {language === "spanish"
                  ? paragraphs.EsObjectives
                  : paragraphs.EnObjectives}
              </p>
            </div>
            <div className="about-imgs-container">
              <div className="about-img"></div>
              <Image
                loading="lazy"
                src="/sam-nelo.jpeg"
                alt="imagen de Samuel Nelo"
                width={400}
                height={400}
                className="about-me-img hidden sm:block object-cover overflow-hidden"
              />
              *
            </div>
          </section>
        </div>
      </article>
      {/* Seccion de flujo de trabajo con ia */}
      <AIWorkflow language={language} />

      {/* Seccion de logros con el teclado mecanico en 3d a la izquierda */}
      <AchievementsDesktop language={language} />
      {/* Boton  para subir al hero(top-section)*/}
      <section className="btn-container">
        <button className="btn">
          <a href="#top-section" className="font-jost">
            {language === "spanish"
              ? "Ir a la sección principal"
              : "Go to the main section"}
          </a>
        </button>
      </section>
    </section>
  );
}
