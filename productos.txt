import Casas from './frontend/src/components/Casas.js';
import Departamentos from './frontend/src/components/Departamentos.js';
import Edificios from './frontend/src/components/Edificios.js';
import Townhouse from './frontend/src/components/Townhouse.js';
import GridInmuebles from './frontend/src/components/GridInmuebles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './frontend/src/components/ItemDetailContainer';
import {Cart} from './frontend/src/components/Cart';
const ItemDetailContainer = {
    products: [ 
        {id:1,
        nombre:"Proyecto Plaza El Golf", 
        slug:"Proyecto-Plaza-El-Golf",
        category: "departamento",
        image:"https://peverdemarketing.com/wp-content/uploads/2022/11/plazaelgolf1.png", 
        ubicacion: "Las Condes",
        precio: "8.500 UF", 
        tipologia: "4D, 2B", 
        metraje: "150 MT2", 
        title: "Depto en Las Condes, Golf",
        countInStock: 3,
        descripcion: "Lindo proyecto emplazado en la zona oriente de Santiago, con excelente ubicación, y cerca de la zona empresarial más importante del país."},
        
      
        {id:2,
        nombre:"Real Vitacura",
        slug:"real-vitacura",
        category: "departamento",
        image:"https://peverdemarketing.com/wp-content/uploads/2022/11/realvitacura.png", 
        ubicacion: "Vitacura",
        precio: "10.500 UF", 
        tipologia: "4D, 2B", 
        metraje: "150 MT2", 
        title: "Depto en Vitacura",
        countInStock: 4,
        descripcion: "Departamento en una zona exclusiva de Santiago, con acceso a parques, y zonas de recreación de primer nivel."},
        
        {id:3,
        nombre:"Proyecto Valle Estrella",
        slug:"valle-estrella",
        category: "departamento",
        image:"https://peverdemarketing.com/wp-content/uploads/2022/11/valleestrella1.png", 
        ubicacion: "Lo Barnechea",
        precio: "11.500 UF", 
        tipologia: "5D, 2B", 
        metraje: "170 MT2", 
        title: "Depto en Lo Barnechea",
        countInStock: 5,
        descripcion: "Modernos departamentos y en un entorno privilegiado por su tranquilidad y grna vegetación."},
        
        {id:4,
        nombre:"Aires de Chicureo",
        slug:"aires-de-chicureo",
        category: "townhouse",
        image:"https://peverdemarketing.com/wp-content/uploads/2022/11/airesdechicureo1.png", 
        ubicacion: "Chicureo",
        precio: "18.500 UF", 
        tipologia: "6D, 4B", 
        metraje: "270 MT2", 
        title: "Casa en Chicureo",
        countInStock: 10,
        descripcion: "Formidable casa con amplios espacios, jardín, y todo lo necesario para disfrutar con la familia, cerca de campos deportivos y parques."},
        

        {id:5,
        nombre:"Lomas de Apoquindo",
        slug:"lomas-de-apoquindo",
        category: "townhouse",
        image:"https://peverdemarketing.com/wp-content/uploads/2022/11/airesdechicureo1.png", 
        ubicacion: "Las Condes",
        precio: "16.500 UF", 
        tipologia: "6D, 4B", 
        metraje: "270 MT2", 
        title: "Casa en Chicureo",
        countInStock: 10,
        descripcion: "Formidable casa con amplios espacios, jardín, y todo lo necesario para disfrutar con la familia, cerca de campos deportivos y parques."},
       
        {id:6,
        nombre:"Casa Royal Santiago",
        slug:"casa-royal-santiago",
        category: "townhouse",
        image:"https://peverdemarketing.com/wp-content/uploads/2022/11/airesdechicureo1.png", 
        ubicacion: "La Reina",
        precio: "10.500 UF", 
        tipologia: "6D, 4B", 
        metraje: "270 MT2", 
        title: "Casa en Chicureo",
        countInStock: 10,
        descripcion: "Formidable casa con amplios espacios, jardín, y todo lo necesario para disfrutar con la familia, cerca de campos deportivos y parques."},
      
        {id:7,
        nombre:"Casa Nueva Trinidad",
        slug:"nueva-trinidad",
        category: "townhouse",
        image:"https://peverdemarketing.com/wp-content/uploads/2022/11/airesdechicureo1.png", 
        ubicacion: "Viña Del Mar",
        precio: "12.500 UF", 
        tipologia: "6D, 4B", 
        metraje: "270 MT2", 
        title: "Casa en Chicureo",
        countInStock: 10,
        descripcion: "Formidable casa con amplios espacios, jardín, y todo lo necesario para disfrutar con la familia, cerca de campos deportivos y parques."},
            
        {id:8,
        nombre:"Townhouse Limited Mountain",
        slug:"limited-mountain",
        category: "townhouse",
        image:"https://peverdemarketing.com/wp-content/uploads/2022/11/airesdechicureo1.png", 
        ubicacion: "Talca",
        precio: "8.500 UF", 
        tipologia: "6D, 4B", 
        metraje: "270 MT2", 
        title: "Casa en Chicureo",
        countInStock: 10,
        descripcion: "Formidable casa con amplios espacios, jardín, y todo lo necesario para disfrutar con la familia, cerca de campos deportivos y parques."},
         
        {id:10,
        nombre:"Casa Terrazas de Vitacura",
        slug:"terrazas-de-vitacura",
        category: "townhouse",
        image:"https://peverdemarketing.com/wp-content/uploads/2022/11/airesdechicureo1.png", 
        ubicacion: "Vitacura",
        precio: "28.500 UF", 
        tipologia: "6D, 4B", 
        metraje: "270 MT2", 
        title: "Casa en Chicureo",
        countInStock: 10,
        descripcion: "Formidable casa con amplios espacios, jardín, y todo lo necesario para disfrutar con la familia, cerca de campos deportivos y parques."},
            
    
      ]
}

export default ItemDetailContainer; 

