import { useState, useContext } from "react";
import { db } from "../firebase/FirebaseConfig";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

const Checkout = () => {
    const [loading, setLoading] = useState(false); 
    const [orderId, setOrderId] = useState(""); 

    const { cart, total } = useContext(CartContext);

    const createOrder = async ({ name, phone, email, direction }) => {  
        setLoading(true);
        const order = {
            buyer: { name, phone, email, direction }, 
            items: cart,
            total: total,
            date: new Date(),
        };

        const orders = collection(db, "orders");
        const orderRef = await addDoc(orders, order);
        setOrderId(orderRef.id);
        setLoading(false);
    }

    return (
        <div className="checkout-container">
            <h1 className="titulo-checkout">Checkout</h1>
            <CheckoutForm createOrder={createOrder} />
            {loading && <p>Procesando orden...</p>}
            {orderId && (
                <div>
                    <p className="orden-checkout">Orden Confirmada. ID de la orden: {orderId}</p>
                    <Link className="link-volver" to="/">Volver a comprar</Link> 
                </div>
            )}
        </div>
    )
}

export default Checkout;
