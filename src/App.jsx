import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import Cart from "./containers/Cart";
import CheckoutForm from "./containers/CheckoutForm";

function App() {
  return (
    <BrowserRouter>
      <CartWidget />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
