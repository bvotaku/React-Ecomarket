
const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>Precio: ${item.price}</p>
      <p>Cantidad: {item.quantity}</p>
      <p>Total: ${item.price * item.quantity}</p>
    </div>
  );
};

export default CartItem;
