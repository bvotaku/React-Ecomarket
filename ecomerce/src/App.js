import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar";
import ItemDetail from "./componentes/ItemDetail";
import { CartProvider } from "./context/CartContext";
import Cart from "./cart/Cart";

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
            <Route path="/producto/:nombre" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
