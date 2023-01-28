/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import './Item.css'

//Componentes
import ItemCount from '../itemCount/ItemCount'

//Core

/*#############################################
                 Logica
###############################################*/
const Item = (props) => {//Funcion constructora

    const { title, category, description, price, id} = props.data

    return (
        <div className='card d-flex col-5 m-4' >
            <div className=''>
                <p>{category}</p>
                <p>{title}</p>
                <p>{description}</p>
                <p>{price}</p>
                <ItemCount stock="5" />
            </div>
        </div>

    )

}

/*#############################################
                 Exportacion
###############################################*/
export default Item
