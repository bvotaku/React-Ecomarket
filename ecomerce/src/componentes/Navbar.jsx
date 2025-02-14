import { Link } from "react-router-dom";
import CarritoDeCompras from "./CartWidget";
import Logo from "../img/Eco-Market.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={Logo} alt="Logo Eco-Market" />
      </Link>

      <div className="navbar-links">
        <Link to="/categoria/consolas">Consolas</Link>
        <Link to="/categoria/portatiles">Portatiles</Link>
        <Link to="/categoria/celulares">Celulares</Link>
      </div>
      <CarritoDeCompras />
    </nav>
  );
};

export default Navbar;