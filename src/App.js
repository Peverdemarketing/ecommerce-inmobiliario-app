import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Navbar from './components/Navbar';
import Casas from './components/Casas.js';
import Departamentos from './components/Departamentos.js';
import Edificios from './components/Edificios.js';
import Townhouse from './components/Townhouse.js';
import Header from './components/Header.js';
import GridInmuebles from './components/GridInmuebles';
import Credito from './components/Credito';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import { Cart } from './components/Cart';
function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<GridInmuebles/>} />
      <Route path='/Categorias' element={<GridInmuebles/>} />
      <Route path='/cart.js' element={<Cart/>} />
      <Route path='/detalle' element={<ItemDetailContainer/>} />
      <Route path='/Categorias/casas.js' element={<Casas/>} />
      <Route path='/Categorias/Departamentos.js' element={<Departamentos/>} />
      <Route path='/Categorias/Edificios.js' element={<Edificios/>} />
      <Route path='/Categorias/Townhouse.js' element={<Townhouse/>} />
      
    </Routes>
    
    </BrowserRouter>
    </>
  );
  
}


export default App; 
