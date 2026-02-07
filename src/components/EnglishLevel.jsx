const EnglishLevel = ({ language }) => {
  return (
    <div className="row-span-2 p-6 border border-neutral-600">
      <div className="rounded-md my-4 flex justify-center min-h-20 w-full bg-[url(https://media.istockphoto.com/id/1678139897/es/vector/ingl%C3%A9s.jpg?s=612x612&w=0&k=20&c=Yw4MZ0KUw5ngcAenvlAX__LM_cR6o4IGL5wiYc0w2QQ=)]">
        <h2 className="size-full p-4 bg-neutral-950/60 text-3xl font-bold">
          {language === "spanish"
            ? "Nivel de inglés (intermedio)"
            : "English level (intermediate)"}
        </h2>
      </div>
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
