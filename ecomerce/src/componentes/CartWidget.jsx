import carritoImg from "../img/carrito.png"; 
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CarritoDeCompras() {
  const { totalQuantity } = useContext(CartContext);
  return (
   
    <Link to="/Cart">
   <div>
      <img className="navbar-carrito" src={carritoImg} alt="Carrito de compras" />
      { totalQuantity}
    </div>
    </Link> 
  );
}

export default CarritoDeCompras;
