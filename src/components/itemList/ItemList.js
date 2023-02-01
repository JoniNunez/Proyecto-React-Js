/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useState, useEffect} from 'react'

//Estilos
import './ItemList.css'

//Componentes
import Item from '../item/Item'


//Core

/*#############################################
                 Logica
###############################################*/
const ItemList = (props) => {//Funcion constructora
 
    const [productos,setProductos] = useState([])



    //preguntar categoria
    //preguntar cuantos queremos traer
    //ordear alfabeticamente

//Nuesta Api de productos
// ------- archivo JSON => '../../misProductos.json'

useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json => setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>)))
        
},[])


    //Tenemos un retraso de informacion


    return(
        
        <div className='container'>
            <div className='d-flex flex-wrap justify-content-center'>
            {productos}
            </div>
        </div>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemList

