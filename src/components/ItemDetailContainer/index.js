import React, {useEffect, useState} from 'react'
import { ItemDetail } from '../ItemDetail'


const inmueble = {id:1,
  image:"https://peverdemarketing.com/wp-content/uploads/2022/11/DeptoLasCondes.png", 
  precio: "4.500 UF", 
  tipologia: "4D, 2B", 
  metraje: "90 MT2", 
  title: "Depto en Las Condes"}

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  useEffect (() => {
    const getData = new Promise(resolve => {
      setTimeout(()=>{
        resolve(inmueble);
      }, 2000);
    });
    getData.then(resultado => setData(resultado));
  }, [])
  return (
    <>
    <ItemDetail data={data}/>
    </>
  )
}

export default ItemDetailContainer;