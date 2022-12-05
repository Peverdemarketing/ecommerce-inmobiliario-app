import React from 'react'


function Departamentos() {

    const handleClick = ()=>{
        window.open('https://www.canva.com/design/DAFQS8ZiLqs/2EQMuLofSska4uEbobg6kg/view?utm_content=DAFQS8ZiLqs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink', '_blank')
        }
   
  return (
    <div className='sec__one'>

    <div>
    <h1> Departamentos de Inversión</h1>
    <div>
    <p>Descubre los inmuebles que Tenemos disponibles para ti que representan excelentes oportunidades de inversión en las principales comunas de Santiago.</p>
    </div>
    <div>
    <img src='https://peverdemarketing.com/wp-content/uploads/2022/10/Departamentos-1.png'></img>
    </div>
    <button className='buton-categoria-inmueble' onClick={handleClick} >Descargar Brochure </button>
    <button>
    </button>
    </div>
    </div>
  )
}

export default Departamentos;
