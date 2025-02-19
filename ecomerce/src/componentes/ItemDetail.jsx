import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";

const ItemDetail = () => {
  const { id } = useParams();  
  const [producto, setProducto] = useState(null);  
  const [loading, setLoading] = useState(true); 
  const [quantityAdded, setQuantityAdded] = useState(0);  
  const { addItem } = useContext(CartContext);  

  const fetchProducto = async (id) => {
    try {
      const docRef = doc(db, "productos", id);  
      const docSnap = await getDoc(docRef);  

      if (docSnap.exists()) {
        setProducto({ id: docSnap.id, ...docSnap.data() });  
      } else {
        setProducto(null); 
      }
    } catch (err) {
      console.error("Error al obtener el producto: ", err);
      setProducto(null);  
    } finally {
      setLoading(false);  
    }
  };

  useEffect(() => {
    setLoading(true);  
    fetchProducto(id);  
  }, [id]);  

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

  if (loading) return <p>Cargando producto...</p>;  
  if (!producto) return <p>Producto no encontrado</p>;  

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
          <p className="card-price-description">Stock: {producto.stock}</p>

          <section>
            {quantityAdded > 0 ? (
              <Link className="detalle-link" to="/cart">Ver carrito</Link>
            ) : (
              <ItemCount stock={producto.stock} initial={1} onAdd={handleAdd} /> 
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
