import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/firebase/getProductById";
import ItemCount from "../components/ItemCount";
import { useCart } from "../context/CartContext";

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

  if (loading) return <p>Cargando detalle...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} width={150} />
      <p>Precio: ${producto.precio}</p>
      <p>Stock disponible: {producto.stock}</p>
      <p>Categoría: {producto.categoria}</p>

      {!added && (
        <ItemCount stock={producto.stock} initial={1} onAdd={handleAdd} />
      )}
      {added && <p style={{ color: "green" }}>Producto agregado al carrito ✅</p>}
    </div>
  );
};

export default ItemDetailContainer;
