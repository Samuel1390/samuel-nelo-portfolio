import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { Link } from "@chakra-ui/react";

const LINKS = [
  {
    TITLE_EN: "Projects",
    TITLE_ES: "Projectos",
    ICON: <ProyectsSvg />,
  },
  {
    TITLE_EN: "Skills",
    TITLE_ES: "Habilidades",
    ICON: <SkillsSvg />,
  },
  {
    TITLE_EN: "About me",
    TITLE_ES: "Sobre mí",
    ICON: <AboutMeSvg />,
  },
  {
    TITLE_EN: "View curriculum",
    TITLE_ES: "Ver currículo",
    ICON: <ViewCvSvg />,
    HREF_EN:
      "https://drive.google.com/file/d/1R6cw9tghhPaLdF2mf8qmy9ergjMi1dLq/view?usp=sharing",
    HREF_ES:
      "https://drive.google.com/file/d/14MCG6LYIkq_7E2cOXkyqk2Z6Bt6JKvVq/view?usp=sharing",
  },
];

function QuickLinks() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <h2 className="font-jost font-bold text-gray-400 animate-fade-in-right">
        {language === "spanish" ? "Enlaces rápidos" : "Quick links"}
      </h2>
      <div className="grid-links grid m-auto grid-cols-2 gap-3 my-5">
        {LINKS.map((link) => {
          return (
            <a
              key={link.TITLE_EN}
              target={link.HREF_EN ? "_blank" : undefined}
              rel="noopener"
              className={`grid-link font-jost animate-fade-in-left`}
              htmlFor={`${link.TITLE_EN.toLowerCase().replace(" ", "-")}-section`}
              href={`${link.HREF_EN ? (language === "spanish" ? link.HREF_ES : link.HREF_EN) : `#${link.TITLE_EN.toLowerCase().replace(" ", "-")}-section`}`}
            >
              <div>
                {link.ICON}
                <h2 className="pl-2">
                  {language === "spanish" ? link.TITLE_ES : link.TITLE_EN}
                </h2>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}
function ProyectsSvg() {
  return (
    <svg
      className="icon ml-2.5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z" />
    </svg>
  );
}
function SkillsSvg() {
  return (
    <svg
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M120 56c0-30.9 25.1-56 56-56l24 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-32 0c-29.8 0-54.9-20.4-62-48-.7 0-1.3 0-2 0-44.2 0-80-35.8-80-80 0-18 6-34.6 16-48-19.4-14.6-32-37.8-32-64 0-30.9 17.6-57.8 43.2-71.1-7.1-12-11.2-26-11.2-40.9 0-44.2 35.8-80 80-80l0-24zm272 0l0 24c44.2 0 80 35.8 80 80 0 15-4.1 29-11.2 40.9 25.7 13.3 43.2 40.1 43.2 71.1 0 26.2-12.6 49.4-32 64 10 13.4 16 30 16 48 0 44.2-35.8 80-80 80-.7 0-1.3 0-2 0-7.1 27.6-32.2 48-62 48l-32 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32l24 0c30.9 0 56 25.1 56 56z" />
    </svg>
  );
}
function AboutMeSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="icon ml-1.5"
    >
      <path
        fill="currentColor"
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
      />
    </svg>
  );
}
function ViewCvSvg() {
  return (
    <svg
      className="icon ml-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="66"
          d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="66;0"
          />
        </path>
        <path
          strokeDasharray="24"
          strokeDashoffset="24"
          d="M3 6.5l9 5.5l9 -5.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.3s"
            to="0"
          />
        </path>
      </g>
    </svg>
  );
}
export default QuickLinks;
