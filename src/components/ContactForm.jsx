import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
        console.error("Error al enviar:", error.text);
        setError("Hubo un error al enviar el mensaje. Intenta nuevamente.");
      });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "2rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center" }}>Contacto</h2>
      <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input type="text" name="name" placeholder="Tu nombre" required style={inputStyle} />
        <input type="email" name="email" placeholder="Tu correo electrónico" required style={inputStyle} />
        <input type="text" name="title" placeholder="Asunto" required style={inputStyle} />
        <textarea name="message" placeholder="Tu mensaje" required rows={5} style={textareaStyle} />
        <button type="submit" style={buttonStyle}>Enviar</button>
      </form>
      {sent && <p style={{ color: "green", marginTop: "1rem" }}>¡Mensaje enviado correctamente!</p>}
      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
    </div>
  );
};

const inputStyle = {
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const textareaStyle = {
  ...inputStyle,
  resize: "vertical",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "0.6rem",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default ContactForm;
