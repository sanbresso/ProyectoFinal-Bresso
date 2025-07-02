import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
      <img src={producto.imagen} alt={producto.nombre} width="100%" />
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <Link to={`/item/${producto.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
