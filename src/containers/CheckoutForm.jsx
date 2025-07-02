import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/firebase/createOrder";
import styles from "./CheckoutForm.module.css";

const CheckoutForm = () => {
  const { cart, clearCart, totalPrice } = useCart();
  const [formData, setFormData] = useState({ nombre: "", email: "", telefono: "" });
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.telefono) {
      setError("Por favor, completá todos los campos.");
      return;
    }

    const order = {
      buyer: formData,
      items: cart,
      total: totalPrice,
    };

    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
      setError("");
    } catch (err) {
      setError("Hubo un problema al procesar la compra.");
    }
  };

  if (orderId) {
    return (
      <div className="container text-center mt-5">
        <h4>¡Gracias por tu compra! 🛍️</h4>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div className={`container ${styles.formContainer}`}>
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            className="form-control"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button type="submit" className="btn btn-primary">Confirmar compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
