import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="container mt-4">
      <div className="row gy-4 justify-content-center">
        {productos.map((producto) => (
          <div className="col-md-4 col-lg-3" key={producto.id}>
            <Item producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
