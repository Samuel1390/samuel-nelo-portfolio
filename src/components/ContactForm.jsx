import React, { useContext, useRef, useState } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { Resend } from "resend";
import handleSubmit from "./HandleSendMessage";

const ES_DEFAULT_MENSAGE =
  "¡Saludos!, me interesa tu perfil de desarrollador, mi nombre es [tu-nombre] espero nos podamos contactar muy pronto.";
const EN_DEFAULT_MENSAGE =
  "Greetings! I'm interested in your developer profile. My name is [your-name], and I hope we can connect very soon.";

const ContactForm = () => {
  const { language } = useContext(LanguageContext);
  const [message, setMessage] = useState(
    language === "spanish" ? ES_DEFAULT_MENSAGE : EN_DEFAULT_MENSAGE,
  );
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [showForm, setShowForm] = useState(false);

  async function handleClickSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const status = await handleSubmit(
      emailRef.current.value,
      messageRef.current.value,
      language,
    );
    setIsLoading(!status); //status devueve true siempre que se resuelve la funcion handle submit
  }
  function handleMessageInput() {
    if (
      messageRef.current.value === ES_DEFAULT_MENSAGE ||
      messageRef.current.value === EN_DEFAULT_MENSAGE
    ) {
      setMessage(
        language === "spanish" ? ES_DEFAULT_MENSAGE : EN_DEFAULT_MENSAGE,
      );
      return;
    }
    setMessage(messageRef.current.value);
  }

  return (
    <div className="relative group">
      <div
        onClick={() => setShowForm(!showForm)}
        aria-label={
          language === "spanish"
            ? "icono del formulario de contacto de Samuel Nelo"
            : "icon from Samuel Nelo's contact form"
        }
        className=" icons-link cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" />
        </svg>
      </div>
      <form
        onSubmit={(e) => handleClickSubmit(e)}
        className={`${showForm ? "opacity-100 flex" : "opacity-0 hidden"}  min-w-70  transition-opacity transitio z-100 absolute flex-col gap-4 border border-neutral-100 text-neutral-200 p-4 bg-slate-950 contact-form shadow-2xl shadow-neutral-900`}
        action=""
      >
        <svg
          className=" sm:hidden block absolute right-0 top-0"
          onClick={() => setShowForm(false)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#d00"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
          />
        </svg>
        <h2 className="font-bold text-xl w-full text-center">
          {language ? "Contáctame" : "Contact me"}
        </h2>
        <div className="flex flex-col">
          <label className="self-start" htmlFor="email">
            Email:
          </label>
          <input
            className="focus:outline-sky-500 required:outline-red-500 required:outline-offset-4 truncate text-ellipsis rounded-sm border border-neutral-100 p-2 bg-gray-800"
            type="email"
            name="email"
            id="email"
            min={3}
            required
            placeholder={language ? "Introduce tu email" : "Write your email"}
            ref={emailRef}
          />
        </div>
        <div className="flex flex-col">
          <label className="self-start" htmlFor="men">
            {language === "spanish" ? "Mensaje: " : "Message:"}
          </label>
          <textarea
            className="focus:outline-sky-500 required:outline-red-500 min-h-30 h-fit max-h-110 rounded-sm border border-neutral-100 bg-gray-800 p-2"
            name="menssage"
            id="men"
            required
            value={message}
            onChange={() => handleMessageInput()}
            placeholder={
              language === "spanish" ? "Envíame un mensaje" : "Send me Message"
            }
            ref={messageRef}
          ></textarea>
        </div>
        <div className="flex items-center">
          <button
            type="submit"
            className="font-bold shadow-sky-400/30 shadow-xl text-shadow-sky-900/50 text-shadow-md cursor-pointer hover:bg-sky-600 bg-sky-500 disabled:text-neutral-600/50 w-fit py-2 px-4 rounded-sm "
            disabled={isLoading}
          >
            {isLoading
              ? language === "spanish"
                ? "Cargando..."
                : "Loading..."
              : language === "spanish"
                ? "Enviar"
                : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
