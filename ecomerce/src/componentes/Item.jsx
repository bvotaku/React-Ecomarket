import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="card">
      <img className="card-img" src={producto.imagen} alt={producto.nombre} />
      <h3 className="card--title">{producto.nombre}</h3>
      <p className="card-price-description">Precio: ${producto.precio}</p>
      <div className="card-button">
        <Link to={`/producto/${producto.id}`}>  
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
