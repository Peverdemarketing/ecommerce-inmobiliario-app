const Inmueble = ({titulo, imagenInmueble, subtitulo}) => {
    return (
        <div className='inmueble'>
        <h1> {titulo} </h1>
        <p>{subtitulo}</p>
        <img src={imagenInmueble} alt={titulo}></img>
        <br></br>
        <a href='/'>Comprar</a>
    </div> 
    )
}

export default Inmueble

