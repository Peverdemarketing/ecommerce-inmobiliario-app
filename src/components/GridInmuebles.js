import Inmueble from "./Inmueble"
import Credito from "./Credito"

function GridInmuebles() {
    return (
            <div className="main-content">
            <Inmueble
            titulo="Departamento en Las Condes"
            subtitulo="Proyecto Plaza el Golf: 4 dormitorios, y 2 baños."
            imagenInmueble= "https://peverdemarketing.com/wp-content/uploads/2022/11/Las-Condes.png"
            />
            <Inmueble
            titulo="Departamento en Vitacura"
            subtitulo="Proyecto Real Vitacura: 5 dormitorios, y 3 baños."
            imagenInmueble= "https://peverdemarketing.com/wp-content/uploads/2022/11/Vitacura.png"
            />
            <Inmueble
            titulo="Departamento en Lo Barnechea"
            subtitulo="Proyecto Valle Estrella: 5 dormitorios, y 2 baños."
            imagenInmueble= "https://peverdemarketing.com/wp-content/uploads/2022/11/Lo-Barnechea.png"
            />        
            <Inmueble
            titulo="Casa en Chicureo"
            subtitulo="Proyecto Aires Chicureo: 7 dormitorios, y 2 baños."
            imagenInmueble= "https://peverdemarketing.com/wp-content/uploads/2022/11/Chicureo.png"
            />

            <Credito/>     
        </div>
    )
}

export default GridInmuebles