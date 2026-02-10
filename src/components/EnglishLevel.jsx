const EnglishLevel = ({ language }) => {
  return (
    <div className="skill row-span-2 p-6">
      <h2 className=" p-4  text-3xl font-bold">
        {language === "spanish"
          ? "Nivel de inglés (intermedio)"
          : "English level (intermediate)"}
      </h2>
      {language === "spanish" ? (
        <LevelEnglishParagraphEs />
      ) : (
        <LevelEnglishParagraphEn />
      )}
    </div>
  );
};
export const LevelEnglishParagraphEn = () => {
  return (
    <p className="text-neutral-300">
      My native language is Spanish. However, when I began studying programming,
      I realized that English was essential for my professional career, so I
      committed to learning it at all costs.{" "}
      <strong>I have a strong command of the language</strong>, both written and
      spoken. 97% of my code is written in English to facilitate communication
      and collaboration with other development teams. I practice daily to
      continue improving my listening comprehension and fluency.
    </p>
  );
};
export const LevelEnglishParagraphEs = () => {
  return (
    <p className="text-neutral-300">
      Mi idioma nativo es el español. Sin embargo, al estudiar programación me
      di cuenta de que el inglés era fundamental para mi carrera profesional,
      por lo que me comprometí a aprenderlo a cualquier costo.
      <strong>Poseo un buen dominio del idioma</strong>, tanto escrito como
      hablado. El 97% de mi código está escrito en inglés para facilitar la
      comunicación y colaboración con otros equipos de desarrollo, lo practico a
      diario para continuar mejorando mi oído y fluidez.
    </p>
  );
};
export default EnglishLevel;
