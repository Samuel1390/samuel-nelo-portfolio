import { Resend } from "resend";
const API_KEY = import.meta.env.VITE_RESEND_API_KEY;

const resend = new Resend(API_KEY);

export async function SendMessage(from, message) {
  const { data, error } = await resend.emails.send({
    from: from ? from : "Acme <onboarding@resend.dev>",
    to: ["snelo1390@gmail.com"],
    subject: message,
    html: "<strong>It works!</strong>",
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}
