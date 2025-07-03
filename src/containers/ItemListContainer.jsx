import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { getProducts } from "../services/firebase/getProducts";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId, query } = useParams(); // obtenemos ambos parámetros

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        let filtered = res;

        if (categoryId) {
          filtered = filtered.filter((prod) => prod.categoria === categoryId);
        }

        if (query) {
          const lowerQuery = query.toLowerCase();
          filtered = filtered.filter((prod) =>
            prod.nombre.toLowerCase().includes(lowerQuery)
          );
        }

        setProductos(filtered);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryId, query]);

  if (loading) return <p>Cargando productos...</p>;
  if (productos.length === 0) return <p>No hay productos disponibles.</p>;

  return <ItemList productos={productos} />;
};

export default ItemListContainer;
