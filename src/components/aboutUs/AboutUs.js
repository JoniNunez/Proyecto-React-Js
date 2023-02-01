/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import './AboutUs.css'
import img from './about-me.jpeg'
import img2 from './aboutus.jpg'
import img3 from './carrousel2.png'

//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const AboutUs = () => {//Funcion constructora

    return(

        <div className='container'>
            <div id="carouselExampleInterval" className='carousel slide row m-3 mt-5 col-12 col-lg-12 d-flex align-items-center'data-bs-ride="carousel" >
               <div className='carousel-inner'>
                  <div className='carousel-item active'>
                  <img src={img} className='d-block w-100'></img></div>
                  <div className='carousel-item'>
                  <img src={img2} className='d-block w-100'></img></div>
                  <div className='carousel-item'>
                  <img src={img3} className='d-block w-100'></img></div>
               </div>
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
						data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
						data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
         </div>
        <p>
         ¡Hola! Mi nombre es Jonathan, un estudiante de 24 años, nacido en Argentina. Actualmente trabajo como editor de video en sitios freelancer como Fiverr y UpWork. Me encanta viajar, mi sueño es conocer el mundo entero, hacer amigos y trabajar en el camino con mi computadora. Escríbeme si quieres trabajar conmigo, estaré feliz de hacerlo.
         </p>
         </div>
    )
}

/*#############################################
                 Exportacion
###############################################*/
export default AboutUs
