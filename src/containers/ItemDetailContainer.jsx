import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/firebase/getProductById";
import ItemCount from "../components/ItemCount";
import { useCart } from "../context/CartContext";
import styles from "./ItemDetail.module.css";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");
  const { addItem } = useCart();

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((item) => setProducto(item))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [itemId]);

  const handleAdd = (cantidad) => {
    addItem(producto, cantidad);
    setAdded(true);
  };

  if (loading) return <p className="text-center mt-5">Cargando detalle...</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;

  return (
    <div className={`container ${styles.detailContainer}`}>
      <div className={styles.detailCard}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className={styles.detailImage}
        />
        <div className={styles.detailInfo}>
          <h2 className={styles.detailTitle}>{producto.nombre}</h2>
          <p className={styles.detailPrice}>${producto.precio}</p>
          <p className={styles.detailStock}>Stock: {producto.stock}</p>
          <p>Categoría: {producto.categoria}</p>

          {!added ? (
            <ItemCount stock={producto.stock} initial={1} onAdd={handleAdd} />
          ) : (
            <p className="text-success">Producto agregado al carrito ✅</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
