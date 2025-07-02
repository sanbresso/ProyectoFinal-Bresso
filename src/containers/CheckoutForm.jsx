import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/firebase/createOrder";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      buyer: form,
      items: cart,
      total: totalPrice,
    };

    try {
      const id = await createOrder(orderData);
      setOrderId(id);
      clearCart();
    } catch (error) {
      console.error("Error al crear orden:", error);
    }
  };

  if (orderId) {
    return (
      <div>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Finalizar compra</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Confirmar compra</button>
    </form>
  );
};

export default CheckoutForm;
