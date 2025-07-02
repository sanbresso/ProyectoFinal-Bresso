import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  if (stock === 0) {
    return <p style={{ color: "red" }}>Producto sin stock</p>;
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button onClick={decrementar} disabled={cantidad <= 1}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar} disabled={cantidad >= stock}>+</button>
      </div>
      <button onClick={() => onAdd(cantidad)} style={{ marginTop: "0.5rem" }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
