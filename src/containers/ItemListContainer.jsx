import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { getProducts } from "../services/firebase/getProducts";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams(); // 👈

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((res) => setProductos(res))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryId]); // 👈 dependencia

  if (loading) return <p>Cargando productos...</p>;
  if (productos.length === 0) return <p>No hay productos disponibles.</p>;
console.log("Categoría:", categoryId);
console.log("Productos filtrados:", productos);

  return <ItemList productos={productos} />;
};

export default ItemListContainer;
