import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

const productos = [
  {
    "nombre": "Consola PlayStation 5",
    "categoria": "Consolas",
    "precio": 499.99,
    "descripcion": "La consola PlayStation 5 ofrece un rendimiento de alta velocidad y gráficos impresionantes.",
    "imagen": "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73119842_1/w=800,h=800,fit=pad"
  },
  {
    "nombre": "Portátil Lenovo",
    "categoria": "Portatiles",
    "precio": 1199.99,
    "descripcion": "Portátil Lenovo ideapad ideal para trabajo y entretenimiento.",
    "imagen": "https://www.ktronix.com/medias/196804839974-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w0NzIzMHxpbWFnZS93ZWJwfGFHVXdMMmhrTlM4eE5EWTJNVGc0T0RnMk9ETTRNaTh4T1RZNE1EUTRNems1TnpSZk1EQXhYekUwTURCWGVERTBNREJJfGI0NjQ5ZDU2N2FmODUzNmM0MWM0NjIyMTFiMzQzZTA0ZTkyNjA5MjYyN2MzMTIwNjFkZjYwY2NmMjMwZGNjNWU"
  },
  {
    "nombre": "Samsung Galaxy S23",
    "categoria": "Celulares",
    "precio": 899.99,
    "descripcion": "Smartphone de gama alta con cámara de 200MP y pantalla Dynamic AMOLED.",
    "imagen": "https://images.samsung.com/latin/smartphones/galaxy-s23/images/galaxy-s23-highlights-color-back-lavender.jpg?imbypass=true"
  }
];


const ItemListContainer = () => {
  const { categoria } = useParams();
  const [productosState, setProductosState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductos = (categoria) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let productosFiltrados = productos.filter(
            (producto) =>
              categoria === "todos" || categoria === undefined || producto.categoria.toLowerCase() === categoria.toLowerCase()
          );
          resolve(productosFiltrados);
        } catch (err) {
          reject("Error al cargar los productos.");
        }
      }, 1000);
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchProductos(categoria)
      .then((productosFiltrados) => {
        setProductosState(productosFiltrados);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [categoria]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="titulo-container">Los mejores descuentos los encuentras en Eco-Market</h1>
      <div className="card-container">
        {productosState.map((producto, index) => (
          <Item key={index} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;