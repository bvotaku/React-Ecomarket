import { createContext, useState } from "react";  

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clear: () => {},
  totalQuantity: 0,
  total: 0
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const addItem = (item) => {
    const itemInCart = cart.find((i) => i.id === item.id);  
    
    if (itemInCart) {
      const newCart = cart.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + item.quantity };  
        }
        return i;
      });
      setCart(newCart);
    } else {
      setCart([...cart, item]);  
    }
  };

  const removeItem = (itemId) => {
    const newCart = cart.filter((i) => i.id !== itemId);  
    setCart(newCart);
  };

  
  const clear = () => {
    setCart([]); 
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};
