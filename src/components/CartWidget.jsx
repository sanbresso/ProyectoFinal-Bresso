import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  if (totalQuantity === 0) return null;

  return (
    <Link to="/cart" style={{ position: "fixed", top: 10, right: 10 }}>
      🛒 <span>{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;
