import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`container ${styles.hero}`}>
      <h1 className={styles.heroTitle}>Bienvenido a Mi Tienda Online 👕👟</h1>
      <p className={styles.heroText}>
        Descubrí nuestros productos de calidad en ropa, calzado y más.
      </p>
      <Link to="/category/remeras" className="btn btn-primary btn-lg">
        Ver productos
      </Link>
    </div>
  );
};

export default Home;
