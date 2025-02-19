import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";  

const ItemListContainer = () => {
  const { categoria } = useParams(); 
  const [productosState, setProductosState] = useState([]);  
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  

  const fetchProductos = async (categoria) => {
    try {
      let productosQuery = collection(db, "productos"); 
      
      if (categoria && categoria !== "todos") {
        productosQuery = query(productosQuery, where("categoria", "==", categoria));
      }

      const querySnapshot = await getDocs(productosQuery);
      
      const productos = querySnapshot.docs.map((doc) => ({
        id: doc.id,  
        ...doc.data(),  
      }));
      
      return productos;
    } catch (err) {
      throw new Error("Error al cargar los productos: " + err.message);
    }
  };

  useEffect(() => {
    setLoading(true); 
    fetchProductos(categoria)  
      .then((productosFiltrados) => {
        setProductosState(productosFiltrados);  
        setLoading(false);  
      })
      .catch((err) => {
        setError(err.message);  
        setLoading(false); 
      });
  }, [categoria]);  

  if (loading) return <p>Cargando productos...</p>;  
  if (error) return <p>{error}</p>;  

  return (
    <div>
      <h1 className="titulo-container">Los mejores descuentos los encuentras en Eco-Market</h1>
      <div className="card-container">
        {productosState.map((producto) => (
          <Item key={producto.id} producto={producto} />  
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
