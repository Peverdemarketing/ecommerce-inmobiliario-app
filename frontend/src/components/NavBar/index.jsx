import React from "react";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
import "./navBar.css";


const NavBar = () => {
	return (
		<div className="container">
			<nav className="nav">
				<div className="nav__brand">
					<NavLink className="nav__link" to="/">
					<img src="https://peverdemarketing.com/wp-content/uploads/2022/12/Logotipo-para-inmobiliaria-Simple-linear-Verde-Negro-100-×-100-px-250-×-250-px-1.png" alt="logo"></img>
					</NavLink>
				</div>
				
				<ul className="nav__list">
					<li>
						<NavLink className="nav__link" to="/">
							Home 
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__link" to="/categoria/inmuebles">
							Departamentos
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__link" to="/categoria/vivienda">
							Viviendas
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__link" to="cart">
							<CartWidget />
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
