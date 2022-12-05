import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './itemCart.css';
import Cart from '../Cart';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.image} alt={product.title} />
            <div>
                <p>Título: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio en UF.: {product.price}</p>
                <button className='eliminar-boton' onClick={() => removeProduct(product.id)}>Eliminar</button>
                

    
            </div>
        </div>
    )
}

export default ItemCart