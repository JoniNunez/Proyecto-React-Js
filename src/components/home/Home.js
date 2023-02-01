/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import './Home.css'
//Componentes
import videoeditor from './videoeditor.png'
//Core

/*#############################################
                 Logica
###############################################*/
const Home = () => {//Funcion constructora

    return(
        
        <div className='container'>
         <div className='row mt-5 mb-5 justify-content-center align-items-center'>
            <div className="box-1-img col-5">
               <img src={videoeditor}></img>
            </div>
            <div className="box-1-text col-5">
               <p className='text-center'>
                  ¡Hola! soy Jonathan Mi pasatiempo favorito es la edición de videos, y si puedo ayudarte con eso, ¿por qué no? Crearé un video profesional para tu marca personal, empresa o negocio. Estudio marketing y publicidad en una universidad de Argentina, al mismo tiempo, soy estudiante de programacion full stack. Tengo experiencia en edición de contenidos desde hace más de 5 años. Actualmente trabajo en una empresa editando videos cortos para Instagram. Cualquier duda que tengas, no dudes en contactarme.
               </p>
            </div>
         </div>
         <div className='row mt-5 mb-5 justify-content-center align-items-center'>
            <div className="box-2-iframe col-6">
               <iframe width="650" height="370" src="https://www.youtube.com/embed/XsTNLQ1cKKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="box-2-text col-5">
               <p className='text-center'>
                  A lo largo de estos años de experiencia pude aprender diferentes tecnicas en edición de video para todas las redes sociales, principalmente para Youtube. Trabajando conmigo podrás tener un video con transiciones modernas y sorprendentes, textos animados, efectos de video y sobre todo, un editor preocupado porque quedes satisfecho con el trabajo final.
               </p>
            </div>
         </div>
         <div className='row mt-5 mb-5 justify-content-center align-items-center'>
         <div className="box-3-text col-5">
                  <p className='text-center'>
                     Llevo un año trabajando de manera freelance en Fiverr. Logrando asi, luego de mucho trabajo y esfuerzo, una categoria de vendedor nivel 1. Calificación de 5 estrellas, aprobadas por mas de 30 personas que confiaron en mi trabajo como editor de videos.
                  </p>
            </div>
            <div className="box-3-iframe col-6">
               <iframe width="650" height="370" src="https://www.youtube.com/embed/DLxN0yzafSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
         </div>
        </div>
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default Home
