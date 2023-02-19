/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useState, useEffect} from 'react'

//Estilos
import './ItemList.css'

//Componentes
import {Item} from '../item/Item'
// import { Link } from 'react-router-dom'


//Core

/*#############################################
                 Logica
###############################################*/
export const ItemList = ({items})=>{

    return(
        <div className="estilos-listado">
            <div style={{width:"100%"}}>item list</div>
            {
                items.map(producto=>(
                     //<Link key={producto.id} to={`/item/${producto.id}`}>
                        <Item key={producto.id} item={producto}/>
                     //</Link>
                ))
            }
        </div>
    )
}