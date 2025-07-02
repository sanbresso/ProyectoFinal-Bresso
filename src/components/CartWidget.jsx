import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <div>
      <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
        🛒 Carrito
        {totalQuantity > 0 && (
          <span style={{ marginLeft: "0.5rem", color: "green", fontWeight: "bold" }}>
            ({totalQuantity})
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
