import { useState } from "react";

const CheckoutForm = ({ createOrder }) => { 
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [direction, setDirection] = useState(""); 
    const handleSubmit = (e) => {
        e.preventDefault();
        createOrder({ name, phone, email, direction }); 
    };

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label htmlFor="phone">Teléfono:</label>
            <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label htmlFor="direction">Dirección:</label>
            <input
                type="text"
                id="direction"
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
                required
            />
            <button className="terminar-compra" type="submit">Confirmar compra</button>
        </form>
    );
}

export default CheckoutForm;
