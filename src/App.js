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
function App() {
  return (
    <>

    <Header/>
    
    <GridInmuebles/>
    <Casas/>
    <Departamentos/>
    <Edificios/>
    <Townhouse/>
    <Credito formularioHipotecario="Calcular Crédito Hipotecario"/>
    </>
  );
}

export default App; 
