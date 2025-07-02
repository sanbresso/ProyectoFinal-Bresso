import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return <p>Tu carrito está vacío 🛒</p>;
  }

  return (
  <div>
    <h2>Carrito de compras</h2>
    <ul>
      {cart.map((item) => (
        <li key={item.id} style={{ marginBottom: "1rem" }}>
          <h4>{item.nombre}</h4>
          <p>Precio unitario: ${item.precio}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${item.quantity * item.precio}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
    <h3>Total: ${totalPrice}</h3>
    <button onClick={clearCart}>Vaciar carrito</button>
    <br />
    <Link to="/checkout">Finalizar compra</Link>
  </div>
);
}
export default Cart;
