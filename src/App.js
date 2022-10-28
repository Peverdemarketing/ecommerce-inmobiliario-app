import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Navbar from './components/Navbar';
import Casas from './components/Casas.js';
import Departamentos from './components/Departamentos.js';
import Edificios from './components/Edificios.js';
import Townhouse from './components/Townhouse.js';

function App() {
  return (
    <>
    <Navbar/>
    <Casas/>
    <Departamentos/>
    <Edificios/>
    <Townhouse/>
    </>
  );
}

export default App; 
