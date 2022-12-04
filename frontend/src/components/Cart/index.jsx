import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import "./Cart.css";

const Cart = () => {
	const { cart, totalPrice } = useCartContext();
	const [active, setActive] = React.useState(false)
	const order = {
		buyer: {
			name: "Pedro",
			email: "pedroverde.cl@gmail.com",
			phone: "11290219021",
			address: "Santiago",
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setActive(true)
		
	}

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => alert("Reserva realizada pronto te contactaremos", id));
	};

	if (cart.length === 0) {
		return (
			<>
				<div className="seccion-carrito-vacio">
				<div>
				<Link to="/" className="compra-texto">Ver Más inmuebles </Link>
				</div>
				<div>
				<p className="texto-carrito">No hay inmuebles en el carrito</p>
				</div>
				<img src="https://peverdemarketing.com/wp-content/uploads/2022/12/Townhouse-250-×-250-px-1080-×-1080-px.png" alt="logo"></img>
				<div></div>
				
				</div>
			</>
		);
	}

	return (
		<>
		<div className="seccion-dos-carrito-de-compra">
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p>Precio Total: <br/> ${totalPrice()}</p>

		<form onSubmit={handleSubmit}>
			<input className="formulario" type="text" placeholder="Ingresa tu nombre" required/> 
			<div>
			<input className="formulario" type="text" placeholder="Ingresa tu correo" required/> 
			</div>
			<div>
			<button type="submit"> Enviar Datos</button>
			</div>
		</form>
		</div>
	{


		active && (
			<div className="realizar-compra-div">
			<Link to="/gracias" className="realizar-compra" onClick={handleClick}>Realizar Compra</Link>
			</div>
		)
	}
			
		</>
	);
};

export default Cart;
