import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h4>Tu carrito está vacío 🛒</h4>
        <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className={`container ${styles.cartContainer}`}>
      <h2>Carrito de compras</h2>
      {cart.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <h5 className={styles.itemTitle}>{item.nombre}</h5>
          <p>Precio unitario: ${item.precio}</p>
          <p>Cantidad: {item.quantity}</p>
          <p className={styles.subtotal}>Subtotal: ${item.quantity * item.precio}</p>
          <button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(item.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <div className="mt-4">
        <h4>Total: ${totalPrice}</h4>
        <button className="btn btn-outline-secondary me-2" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-success">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
