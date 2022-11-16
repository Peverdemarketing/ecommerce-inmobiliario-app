import React, {useState} from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton'
import Logo from './Logo';
function Navbar() {
    
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <>

       
    <div>
        
    
    
    <NavContainer>
    <Logo/>   
        <h2>Inmuebles Ecommerce</h2>
        <div id='menu'>
            <ul className='nav-bar-inmueble' onClick={handleToggle}>
            <a href='/'>Home</a>
            <a href='/Categorias/Casas.js'>Casas</a>
            <a href='/Categorias/Departamentos.js'>Departamentos</a>
            <a href='/Categorias/Townhouse.js'>Townhouse</a>
            <a href='/Categorias/Edificios.js'>Edificios</a>
            <a href='/Categorias'>Categorias</a>
            <a href='/Cart.js'> Carrito </a>
            </ul>
        </div>

        <div className='burguer'><BurgerButton/></div>
        
    </NavContainer>
    </div>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav `
    h2 {
        font-weight: 300px;
        color: white;
    }
    padding: 0.3rem;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        color: white;
        text-decoration: none;
        margin-right: 1rem;

    }

    .burguer {
        @media(min-widht: 770px) {
            display: none;
            
        }
    }

`