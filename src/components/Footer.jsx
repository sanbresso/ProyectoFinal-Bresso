import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`bg-dark text-white mt-5 py-4 ${styles.footer}`}>
      <div className="container text-center">
        <p>© {new Date().getFullYear()} SENCILLE STORE - Todos los derechos reservados.</p>
        <p>Contacto: contacto@sencillestore.com</p>
        <p>
          <a href="/politica-privacidad" className="text-white text-decoration-underline">
            Política de Privacidad
          </a>
        </p>
        <div className={styles.social}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className={styles.instagramIcon}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
