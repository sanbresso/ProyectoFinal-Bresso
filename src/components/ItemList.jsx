import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
