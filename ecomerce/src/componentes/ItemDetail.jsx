import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const productos = [
  {
    id: "playstation-5",
    nombre: "Consola PlayStation 5",
    categoria: "Consolas",
    precio: 499.99,
    descripcion: "La consola PlayStation 5 ofrece un rendimiento de alta velocidad y gráficos impresionantes.",
    imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73119842_1/w=800,h=800,fit=pad"
  },
  {
    id: "lenovo-portatil",
    nombre: "Portátil Lenovo",
    categoria: "Portatiles",
    precio: 1199.99,
    descripcion: "Portátil lenovo ideal para trabajo y entretenimiento.",
    imagen: "https://www.ktronix.com/medias/196804839974-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w0NzIzMHxpbWFnZS93ZWJwfGFHVXdMMmhrTlM4eE5EWTJNVGc0T0RnMk9ETTRNaTh4T1RZNE1EUTRNems1TnpSZk1EQXhYekUwTURCWGVERTBNREJJfGI0NjQ5ZDU2N2FmODUzNmM0MWM0NjIyMTFiMzQzZTA0ZTkyNjA5MjYyN2MzMTIwNjFkZjYwY2NmMjMwZGNjNWU"
  },
  {
    id: "galaxy-s23",
    nombre: "Samsung Galaxy S23",
    categoria: "Celulares",
    precio: 899.99,
    descripcion: "Smartphone de gama alta con cámara de 200MP y pantalla Dynamic AMOLED.",
    imagen: "https://images.samsung.com/latin/smartphones/galaxy-s23/images/galaxy-s23-highlights-color-back-lavender.jpg?imbypass=true"
  }
];

const ItemDetail = () => {
  const { nombre } = useParams();
  const producto = productos.find((producto) =>
    producto.nombre.toLowerCase() === nombre.toLowerCase()
  ); 

  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleAdd = (quantity) => {
    setQuantityAdded(quantity);
    
    const item = {
      id: producto.id,  
      title: producto.nombre,
      price: producto.precio,
      quantity: quantity,
      imageUrl: producto.imagen,
    };
    
    addItem(item);
  };

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h1 className="titulo-container">Detalle del Producto</h1>
      <div className="container">
        <div className="card">
          <img className="card-img" src={producto.imagen} alt={producto.nombre} />
          <h2 className="card--title">{producto.nombre}</h2>
          <p className="card-price-description">{producto.descripcion}</p>
          <p className="card-price-description">Precio: ${producto.precio}</p>
          <p className="card-price-description">Categoría: {producto.categoria}</p>

          <section>
            {quantityAdded > 0 ? (
              <Link className="detalle-link" to="/cart">Ver carrito</Link>
            ) : (
              <ItemCount stock={5} initial={1} onAdd={handleAdd} />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
