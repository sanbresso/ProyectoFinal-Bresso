import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import CartWidget from "./CartWidget";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search/${search.toLowerCase()}`);
      setSearch("");
    }
  };

  return (
    <nav className={`d-flex justify-content-between align-items-center ${styles.navbar}`}>
      <div className="d-flex align-items-center gap-3">
        <Link to="/" className={styles.logo}>SENCILLE STORE</Link>
        <Link to="/category/remeras" className={styles.navLink}>Remeras</Link>
        <Link to="/category/pantalones" className={styles.navLink}>Pantalones</Link>
        <Link to="/category/calzado" className={styles.navLink}>Calzado</Link>
        <Link to="/category/accesorios" className={styles.navLink}>Accesorios</Link>
        <Link to="/contact" className={styles.navLink}>Contacto</Link>
      </div>

      <form className="d-flex align-items-center me-3" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-light" type="submit">Buscar</button>
      </form>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
