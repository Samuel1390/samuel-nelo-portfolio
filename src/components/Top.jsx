import "../globals.css";
import "./Top.css";
import QuickLinks from "./QuickLinks";
import { ProfilePicture } from "./ProfilePicture";
import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import ContactForm from "./ContactForm";
import { LanguageBtn } from "./LanguageBtn";
import { LanguageContext } from "./context/LanguageContext";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

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
    <>
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
      <div className="arrow-down">
        <ArrowDownIcon width={40} />
      </div>
    </>
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
      <a
        href="https://www.linkedin.com/in/samuel-david-nelo-132632378/"
        className="icons-link"
        rel="noopener"
        target="_blank"
        aria-label={
          language === "spanish"
            ? "Enlace al linkedin de Samuel Nelo"
            : "link to Samuel Nelo's linkedin"
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z" />
        </svg>
      </a>
      <ContactForm />
    </div>
  );
}
