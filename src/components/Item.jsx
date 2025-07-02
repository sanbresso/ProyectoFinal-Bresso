import { Link } from "react-router-dom";
import styles from "./Item.module.css";

const Item = ({ producto }) => {
  return (
    <div className={`card ${styles.card}`}>
      <img src={producto.imagen} alt={producto.nombre} className={styles.cardImage} />
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{producto.nombre}</h5>
        <p className={styles.cardPrice}>${producto.precio}</p>
        <Link to={`/item/${producto.id}`} className={styles.cardLink}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
