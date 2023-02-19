/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


//Estilos
import './ItemDetailContainer.css'

//Componentes
import {ItemDetail} from '../itemDetail/ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import {db} from "../../services/firebase";

//Core

/*#############################################
                 Logica
###############################################*/
export const ItemDetailContainer = ()=>{
    const {productId} = useParams();

    const [item, setItem] = useState({});

    useEffect(()=>{
        const getProducto = async()=>{
            const queryRef = doc(db,"listaProductos",productId);
            const response = await getDoc(queryRef);
            const newDoc = {
                id:response.id,
                ...response.data()
            }
            // console.log(newDoc)
            setItem(newDoc);
        }
        getProducto();
    },[productId])

    return(
        <div className="item-detail-container">
            <p>item detail container</p>
            <ItemDetail item={item}/>
        </div>
    )
}