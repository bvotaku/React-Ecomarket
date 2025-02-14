import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar";
import ProductDetail from "./componentes/ProductDetail";

function App() {
  return (
    <div>
      <header className="App">
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </header>

      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/producto/:nombre" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
