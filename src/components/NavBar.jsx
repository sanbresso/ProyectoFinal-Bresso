import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={`d-flex justify-content-between align-items-center ${styles.navbar}`}>
      <div className="d-flex align-items-center">
        <Link to="/" className={styles.logo}>MiTienda</Link>
        <Link to="/category/remeras" className={styles.navLink}>Remeras</Link>
        <Link to="/category/pantalones" className={styles.navLink}>Pantalones</Link>
        <Link to="/category/calzado" className={styles.navLink}>Calzado</Link>
        <Link to="/contact" className={styles.navLink}>Contacto</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
