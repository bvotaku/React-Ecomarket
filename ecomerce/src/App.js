import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar";
import ItemDetail from "./componentes/ItemDetail";
import { CartProvider } from "./context/CartContext";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import Redes from "./componentes/Redes";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div>
          <header className="App">
            <Navbar />
          </header>

          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categoria/:categoria" element={<ItemListContainer />} />
              <Route path="/producto/:id" element={<ItemDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          <footer>
            <Redes />
          </footer>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
