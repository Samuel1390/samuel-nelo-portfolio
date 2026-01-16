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
    language === "spanish" ? ES_DEFAULT_MENSAGE : EN_DEFAULT_MENSAGE
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
      language
    );
    setIsLoading(!status);
  }
  function handleMessageInput() {
    if (
      messageRef.current.value === ES_DEFAULT_MENSAGE ||
      messageRef.current.value === EN_DEFAULT_MENSAGE
    ) {
      setMessage(
        language === "spanish" ? ES_DEFAULT_MENSAGE : EN_DEFAULT_MENSAGE
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
        className="icons-link cursor-pointer"
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
        className={`${showForm ? "flex" : "hidden"} z-100 absolute flex-col gap-4 border border-neutral-100 text-neutral-200 p-4 rounded-xl bg-neutral-950`}
        action=""
      >
        <div className="flex flex-col">
          <label className="self-start" htmlFor="email">
            Email:
          </label>
          <input
            className="required:outline-red-500 required:outline-offset-4 truncate text-ellipsis rounded-sm border border-neutral-100 p-2 bg-gray-800"
            type="email"
            name="email"
            id="email"
            placeholder={language ? "Introduce tu email" : "Write your email"}
            ref={emailRef}
          />
        </div>
        <div className="flex flex-col">
          <label className="self-start" htmlFor="men">
            {language === "spanish" ? "Mensaje: " : "Message"}
          </label>
          <textarea
            className="min-h-30 h-fit max-h-110 rounded-sm border border-neutral-100 bg-gray-800 p-2"
            name="menssage"
            id="men"
            value={message}
            onChange={() => handleMessageInput()}
            placeholder={
              language === "spanish" ? "Envíame un mensaje" : "Send me Message"
            }
            ref={messageRef}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-(--dark-color2) disabled:text-neutral-100/50 w-fit py-2 px-4 rounded-sm outline-sky-700 outline-2"
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
      </form>
    </div>
  );
};

export default ContactForm;
