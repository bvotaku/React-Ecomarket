import Facebook from "../img/facebook-color-svgrepo-com.svg";  
import Instagram from "../img/instagram-1-svgrepo-com.svg";
import Twitter from "../img/twitter-svgrepo-com.svg";

function Redes() {
    return (
        <div>
            <h2>Consulta nuestras redes sociales</h2>  
            <div className="Social-icons">  
                <a href="#">
                    <img src={Facebook} alt="icono de Facebook" />
                </a>
                <a href="#">
                    <img src={Instagram} alt="icono de Instagram" />
                </a>
                <a href="#">
                    <img src={Twitter} alt="icono de Twitter" />
                </a>
            </div>
        </div>
    );
}

export default Redes;
