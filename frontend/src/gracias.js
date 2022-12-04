import React, { useEffect } from 'react'
import { useCartContext } from "./context/CartContext";



function Gracias() {
   
  
	const { clearCart} = useCartContext();
  useEffect(() => {
    clearCart();
  }, [])
  
  return (
    <>
    <div className='sec__one'>
    <h1> GRACIAS POR TU RESERVA </h1>
    </div>
    <div className='sec__one'>
    <img src='https://peverdemarketing.com/wp-content/uploads/2022/12/Logotipo-para-inmobiliaria-Simple-linear-Verde-Negro-1.png'></img>
   
    </div>
    </>
  )
}

export default Gracias;