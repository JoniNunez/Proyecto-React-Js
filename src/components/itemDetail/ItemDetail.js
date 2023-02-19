/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useState } from 'react';

//Estilos
import './ItemDetail.css'
//Componentes
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import  {ItemCount}  from '../itemCount/ItemCount';
import {Link} from 'react-router-dom';

//Core

/*#############################################
                 Logica
###############################################*/
export const ItemDetail = ({item})=>{
    const {addProduct} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const onAdd = (count)=>{
        addProduct(item,count);
        setQuantity(count);
    }

    return(
        <div className='detail-container'>
            <p style={{width: "100%"}}>item detail</p>
            <div className='img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='img-container'>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <h5>$ {item.price}</h5>
            </div>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            {
                quantity>0 &&
                <Link to="/cart">
                    <button>Ir al carrito</button>
                </Link>
            }
        </div>
    )
}