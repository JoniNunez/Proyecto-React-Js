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
        <div className='col-5 m-2 d-flex'>
            <div className='card text-center justify-content-center align-items-center'>
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
