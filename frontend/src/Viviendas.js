import React from 'react'

function Viviendas() {
    const handleClick = ()=>{
        window.open('https://www.canva.com/design/DAFSKScWHqU/8r8a9dV0-yDHB23l3HYmVw/view?utm_content=DAFSKScWHqU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink', '_blank')
        }
   
  return (
    <div className='sec__one'>
    <div>
    <h1> Departamentos de Inversión</h1>
    <p>Tenemos excelentes opciones en Townhouse, Casas y departamentos para que vivas en el hogar que siempre has soñado.</p>
    <img src='https://peverdemarketing.com/wp-content/uploads/2022/10/Tonwhouse-1.png'></img>
    <br></br>
    <button className='buton-categoria-inmueble' onClick={handleClick} >Descargar Brochure </button>
    <button>
</button>
</div>
    </div>
  )
}


export default Viviendas;