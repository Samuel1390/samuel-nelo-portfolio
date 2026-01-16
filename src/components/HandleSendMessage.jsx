import Swal from "sweetalert2";

export default async function handleSubmit(email, message, language) {
  try {
    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        message: message,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      Swal.fire({
        title: language === "spanish" ? "Mensaje enviado" : "Message sent",
        icon: "success",
        draggable: true,
      });
    } else {
      Swal.fire({
        icon: "error",
        title:
          language === "spanish"
            ? "Error al enviar el mensaje"
            : "Error to send the menssage",
        text: "Something went wrong!",
      });
    }
    return true;
  } catch (e) {
    Swal.fire({
      icon: "error",
      title:
        language === "spanish"
          ? "Error al enviar el mensaje"
          : "Error to send the menssage",
    });
    console.log(e);
    return true;
  }
}
