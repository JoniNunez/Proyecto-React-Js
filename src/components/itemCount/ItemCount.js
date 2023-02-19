/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useState } from 'react'
//Estilos
import './ItemCount.css'
//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
export const ItemCount = ({stock, initial, onAdd})=>{
    const [count, setCount] = useState(initial);

    const decrementar = ()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    const incrementar = ()=>{
        if(count<stock){
            setCount(count+1)
        }
    }

    return(
        <div className='estilosContador d-flex justify-content-center align-items-center'>
            <p className='m-3' >Stock disponible: {stock}</p>
            <div className='contenedorControles d-flex m-2 align-items-center'>
                <button disabled={stock===0} onClick={decrementar} className='botonControl m-2'>-</button>
                <p className='m-2' >{count}</p>
                <button disabled={stock===0} onClick={incrementar} className='botonControl m-2'>+</button>
            </div>
            <button disabled={stock === 0} className='botonAgregar' onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}