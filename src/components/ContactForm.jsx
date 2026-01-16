import React, { useContext, useRef } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { Resend } from "resend";
//import { SendMessage } from "./Resend";

const ES_DEFAULT_MENSAGE = "Hola!, me parecio increible tu portafolio";
const EN_DEFAULT_MENSAGE = "sfd";

const ContactForm = () => {
  const { language } = useContext(LanguageContext);

  const emailRef = useRef(null);
  const messageRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("../../api/send", {
      method: "POST",
      body: JSON.stringify({ message: emailRef.current.value }),
      headers: { "Content-Type": "application/json" },
    });
  }
  return (
    <div className="relative group">
      <div
        aria-label={
          language === "spanish"
            ? "icono del formulario de contacto de Samuel Nelo"
            : "icon from Samuel Nelo's contact form"
        }
        className="icons-link"
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
        className="z-100 absolute flex-col gap-4 border border-neutral-100 text-neutral-200 p-4 rounded-xl bg-neutral-950 hover:flex group-hover:flex hidden"
        action=""
      >
        <div className="flex flex-col">
          <label className="self-start" htmlFor="email">
            Email:
          </label>
          <input
            className="rounded-sm border border-neutral-100 p-2 bg-gray-800"
            type="text"
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
            className="rounded-sm border border-neutral-100 bg-gray-800 p-2"
            name="menssage"
            id="men"
            // value={
            //   language === "spanish" ? ES_DEFAULT_MENSAGE : EN_DEFAULT_MENSAGE
            // }</div>
            placeholder={
              language === "spanish" ? "Envíame un mensaje" : "Send me Message"
            }
            ref={messageRef}
          ></textarea>
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          className="bg-(--dark-color2) w-fit py-2 px-4 rounded-sm outline-sky-700 outline-2"
        >
          {language === "spanish" ? "Enviar" : "Submit"}
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
