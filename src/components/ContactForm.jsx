import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uwvhiv9", "template_d9vodhp", form.current, "PQe6ikL-w8RxLnNoe")
      .then(() => {
        setSent(true);
        setError("");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error.text);
        setError("Hubo un error al enviar el mensaje. Intenta nuevamente.");
      });
  };

  return (
    <div className={`container ${styles.contactContainer}`}>
      <h2>Contacto</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label">Tu nombre</label>
          <input type="text" name="name" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Tu correo electrónico</label>
          <input type="email" name="email" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Asunto</label>
          <input type="text" name="title" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea name="message" className="form-control" required />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>

      {sent && <p className="text-success mt-3">¡Mensaje enviado correctamente!</p>}
      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
};

export default ContactForm;
