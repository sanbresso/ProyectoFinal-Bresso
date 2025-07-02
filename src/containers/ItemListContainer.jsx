import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/firebase/getProducts";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((items) => setProductos(items))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
