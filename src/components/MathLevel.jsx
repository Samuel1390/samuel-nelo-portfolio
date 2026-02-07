import React from "react";

const MathLevel = ({ language }) => {
  return (
    <div className="row-span-2 p-6 border border-neutral-600">
      <div className="rounded-md my-4 flex justify-center min-h-5 w-full bg-[url(https://wallpapers.com/images/hd/advanced-math-equations-pk8kxc3pvndyc1wz.jpg)]">
        <h2 className="size-full p-4 bg-neutral-950/60 text-3xl font-bold">
          {language === "spanish" ? "Nivel de matemáticas" : "Math level"}
        </h2>
      </div>
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
