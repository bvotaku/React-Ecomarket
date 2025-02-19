
const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img className="cart-item-img" src={item.imageUrl} alt={item.title} />
      <h3 className="cart-item-title">{item.title}</h3>
      <p className="cart-item-price">Precio: ${item.price}</p>
      <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
      <p className="cart-item-total">Subtotal: ${item.price * item.quantity}</p>
    </div>
  );
};

export default CartItem;
