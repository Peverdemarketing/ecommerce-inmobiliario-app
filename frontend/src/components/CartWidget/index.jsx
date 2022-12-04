import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
	const { totalProducts } = useCartContext();

	return (
		<>
			<img src="https://peverdemarketing.com/wp-content/uploads/2022/12/carrito-de-compras.png" alt="carrito"></img>
			<span>{totalProducts() || ""}</span>
		</>
	);
};

export default CartWidget;
