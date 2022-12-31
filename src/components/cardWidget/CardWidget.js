/* ###########################       
        IMPORTACIONES        
############################*/

// Modulos
// Estilos
import "./CardWidget.css";

// Componentes

import carrito from "./iconoCarrito.png"
// Core

/* ###########################       
        LOGICA        
############################*/
function CardWidget(props) {
    return(
        <div className="contenedorCarrito">
            <img src={carrito}></img>
            <p>{props.cantidad}</p>
        </div>
    )
}

/* ###########################       
        EXPORTACION        
############################*/

export default CardWidget