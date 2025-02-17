import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    onAdd(count); 
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <p>{count}</p>
      <div className="counter">
        <button className="button" onClick={decrement} disabled={count <= 1}>
          -
        </button>
        <span className="span">{count}</span>
        <button className="button-2" onClick={increment} disabled={count >= stock}>
          +
        </button>
      </div>
      <button className="button-carrito" onClick={handleAdd} disabled={stock === 0 || count <= 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
