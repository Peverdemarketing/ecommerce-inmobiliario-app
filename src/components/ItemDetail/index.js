import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer';

export const ItemDetail = ({data}) => {
  return (
    <>
        <div className='container'>
            <div className='detail'>
                <img className='detail_image' src={data.image} alt="" />
                <div className='content'>
                    <h2>{data.title}</h2>
                    <p> 
                    Precio: {data.precio}
                    Tipologia: {data.tipologia}
                    Metraje: {data.metraje}
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ItemDetail;

