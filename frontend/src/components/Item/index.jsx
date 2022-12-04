import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ info }) => {
	return (
		<Link to={`/detalle/${info.id}`} className="inmueble">
			<img src={info.image} alt="" />
			<h5>{info.title}</h5>
		</Link>
	);
};

export default Item;
