/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useState, useEffect } from 'react' 

//Estilos
import './Hooks.css'
//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const Hooks = () => {//Funcion constructora

    //Hooks de estado
    //Costructor [ESTADO , Funcion que actualiza el estado] = Inicializacion del Estado (El valor por default del estado )
    const [contador,setContador] = useState(0)

    //Hooks de efectos
    //UseEffect (funcion ( inicio, fin )) , variantes

    useEffect(()=> {

        //Montaje
            console.log("Componente inicializado");
        //Desmotaje
        return () => {
            console.log("Componente finalizado");
        }
    })



    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    return(
        
        <div className='d-flex'>
           <button onClick={restar} className="m-2" >-</button>
           <p className="m-2">{contador}</p>
           <button onClick={sumar} className="m-2">+</button>
        </div>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default Hooks




