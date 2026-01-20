import "../globals.css";
import "./Top.css";
import { ProfilePicture } from "./ProfilePicture";
import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import ContactForm from "./ContactForm";
import { LanguageBtn } from "./LanguageBtn";
import { LanguageContext } from "./context/LanguageContext";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mySpanishDescription = `Desarrollador <strong>Front-end</strong>💻 con pasión por el
<strong>Software</strong> y la <strong>Tecnología</strong> Dedicado a
la creación de aplicaciones web tanto funcionales como visualmente
atractivas.`;
const myEnglishDescription = `Front-end <strong>Developer</strong>💻 with a passion for
<strong>Software</strong> and <strong>Technology</strong>. Dedicated to 
creating web applications that are both functional and visually appealing.`;

export const Top = () => {
  const [title, setTitle] = useState("Samuel Nelo");
  const { language } = useContext(LanguageContext);
  const currentDescription =
    language === "spanish" ? mySpanishDescription : myEnglishDescription;
  const [description, setDescription] = useState("");
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    async function typingText(element, setFuntion, time) {
      const completedTitle = element;
      for (let i = 0; i <= completedTitle.length; i++) {
        await delay(time);

        if (!isMounted.current) return;
        setFuntion(completedTitle.slice(0, i));
      }
    }
    async function typingHtmlText(htmlString, setFuntion, time) {
      setFuntion("");
      for (let i = 0; i <= htmlString.length; i++) {
        await delay(time);
        if (!isMounted.current) return;
        setFuntion(htmlString.slice(0, i));
      }
    }
    typingText(title, setTitle, 40);
    typingHtmlText(currentDescription, setDescription, 15);
    return () => {
      isMounted.current = false;
    };
  }, [language, currentDescription]);
  return (
    <section id="top-section" className="top bg-(--color-background)">
      <div className="top-text font-montserrat">
        <h1 className="h1 bg-gradient-to-lf-(--live-color)-(--live-color2)">
          {title}
        </h1>
        <Icons />
        <p
          className="my-4 my-description text-pretty m-auto text font-jost"
          dangerouslySetInnerHTML={{ __html: description || "" }}
        ></p>
        <LanguageBtn />
        <QuickLinks />
      </div>
      <ProfilePicture />
    </section>
  );
};

function Icons() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="icons">
      <a
        className="icons-link"
        target="_blank"
        rel="noopener"
        href="https://github.com/Samuel1390"
        aria-label={
          language === "spanish"
            ? "enlace al github de Samuel Nelo"
            : "link to Samuel Nelo's github"
        }
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          version="1.1"
          data-view-component="true"
          className="octicon octicon-mark-github v-align-middle"
        >
          <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
        </svg>
      </a>
      <ContactForm />
    </div>
  );
}
function QuickLinks() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <h2 className="font-jost font-bold  text-gray-400">
        {language === "spanish" ? "Enlaces rápidos" : "Quick links"}
      </h2>
      <div className="grid-links grid m-auto grid-cols-2 gap-3 my-5">
        <a
          className="grid-link font-jost"
          htmlFor="proyects-section"
          href="#proyects-section"
        >
          <div>
            <h2>{language === "spanish" ? "Proyectos" : "Projects"}</h2>
            <svg
              className="icon ml-2.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
          </div>
        </a>
        <a
          htmlFor="skills-section"
          className="grid-link font-jost"
          href="#skills-section"
        >
          <div>
            <h2 className="mr-2">
              {language === "spanish" ? "Habilidades" : "Skills"}
            </h2>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M120 56c0-30.9 25.1-56 56-56l24 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-32 0c-29.8 0-54.9-20.4-62-48-.7 0-1.3 0-2 0-44.2 0-80-35.8-80-80 0-18 6-34.6 16-48-19.4-14.6-32-37.8-32-64 0-30.9 17.6-57.8 43.2-71.1-7.1-12-11.2-26-11.2-40.9 0-44.2 35.8-80 80-80l0-24zm272 0l0 24c44.2 0 80 35.8 80 80 0 15-4.1 29-11.2 40.9 25.7 13.3 43.2 40.1 43.2 71.1 0 26.2-12.6 49.4-32 64 10 13.4 16 30 16 48 0 44.2-35.8 80-80 80-.7 0-1.3 0-2 0-7.1 27.6-32.2 48-62 48l-32 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32l24 0c30.9 0 56 25.1 56 56z" />
            </svg>
          </div>
        </a>
        <a
          htmlFor="about-section"
          className=" grid-link font-jost"
          href="#about-section"
        >
          <div>
            <h2>{language === "spanish" ? "Acerca de mí" : "About me"}</h2>
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
          </div>
        </a>
        <a
          className="grid-link font-jost"
          target="_blank"
          rel="noopener noreferrer"
          href={
            language === "spanish"
              ? "https://drive.google.com/file/d/1mwXFvx8ZuKud91iMSfjHZkhI10xyL9fx/view?usp=sharing"
              : "https://drive.google.com/file/d/1D_wL4mXh_b82clBEut2jLxjjSpqTRfEv/view?usp=sharing"
          }
        >
          <div>
            <h2 className="text-center">
              {language === "spanish" ? "Ver currículo" : "View curriculum"}
            </h2>
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
          </div>
        </a>
      </div>
    </>
  );
}
