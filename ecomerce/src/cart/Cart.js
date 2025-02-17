import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clear, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="titulo-carrito-container">
        <h1 className="titulo-carrito">No hay Productos en el carrito</h1>
        <Link className="link-carrito" to="/">Volver a la Tienda</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="carrito-container">
        {cart.map(p => (
          <CartItem key={p.id} item={p} />
        ))}
        <h3 className="carrito-total">Total: ${total}</h3>
        <button className="carrito-boton" onClick={clear}>Vaciar carrito</button>
        <Link className="checkout" to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
