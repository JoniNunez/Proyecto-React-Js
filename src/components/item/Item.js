/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { Link } from 'react-router-dom'

//Estilos
import './Item.css'
import Card from 'react-bootstrap/Card';
/* import { Link } from 'react-router-dom'; */
//Componentes

//Core

/*#############################################
                 Logica
###############################################*/
export const Item = ({item})=>{
    return(
        <div className="tarjeta-producto">
            <img src={item.pictureUrl} alt={item.title}/>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>$ {item.price}</p>
            <Link to={`/item/${item.id}`}>
                <button className='boton-ver'>Ver detalle...</button>
            </Link>
        </div>
    )
}