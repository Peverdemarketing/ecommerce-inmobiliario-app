import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer/index";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import "./App.css";
import Departamentos from "./Departamentos";
import Viviendas from "./Viviendas";
import Gracias from "./gracias";



function App() {
	return (
		
		<BrowserRouter>
			<CartProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer className="products" />} />
					<Route
						path="/categoria/:categoriaId"
						element={<ItemListContainer />}
						
					/>
					<Route
						path="/categoria/inmuebles"
						element={<Departamentos />}
					/>
					<Route
						path="/categoria/vivienda"
						element={<Viviendas />}
					/>

					<Route
						path="/gracias"
						element={<Gracias/>}
					/>
					
					<Route path="/cart" element={<Cart />} />
					<Route path="/detalle/:detalleId" element={<ItemDetailContainer className="products" />} />
				</Routes>
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
