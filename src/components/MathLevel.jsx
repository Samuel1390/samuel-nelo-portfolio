import React from "react";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
const MathLevel = ({ language }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`skill row-span-2 p-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <h2 className=" p-4 text-3xl font-bold">
        {language === "spanish" ? "Nivel de matemáticas" : "Math level"}
      </h2>
      {language === "spanish" ? (
        <MathLevelParagraphEs />
      ) : (
        <MathLevelParagraphEn />
      )}
    </div>
  );
};

function MathLevelParagraphEs() {
  return (
    <p className="text-neutral-300">
      Poseo un sólido dominio de matemáticas avanzadas:{" "}
      <strong>Cálculo Diferencial e Integral</strong>, Matemáticas Discretas I y
      Aritmética. Adquirí y apliqué estos conocimientos en la Universidad de
      Carabobo, donde descubrí mi pasión por esta disciplina.
    </p>
  );
}
function MathLevelParagraphEn() {
  return (
    <p className="text-neutral-300">
      I possess strong proficiency in advanced mathematics:{" "}
      <strong>Differential and Integral Calculus</strong>, Discrete Mathematics
      I, and Arithmetic. I acquired and applied these skills at the University
      of Carabobo, where I developed a genuine passion for this discipline.
    </p>
  );
}

export default MathLevel;
