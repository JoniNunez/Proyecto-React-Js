/*#############################################
                 Importaciones
###############################################*/

//Modulos

//Estilos
import './ItemListContainer.css'

//Componentes
import { useEffect, useState } from "react";
import {ItemList} from '../itemList/ItemList'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../../services/firebase";

//Core

/*#############################################
                 Logica
###############################################*/
export const ItemListContainer = ()=>{
    const {tipoProducto} = useParams();

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            //1.Creamos una consulta que vamos a realizar a la base de datos
            const queryRef = tipoProducto ? query(collection(db,"listaServicios") , where("category","==",tipoProducto)) : collection(db,"listaServicios");
            //2.Hacer la consulta
            const response = await getDocs(queryRef);
            const docsInfo = response.docs.map(doc=>{
                const newDoc = {
                    id:doc.id,
                    ...doc.data()
                }
                return newDoc
            });
            // console.log(docsInfo);
            setProductos(docsInfo);
            // console.log("doc",response.docs[0]);
            // console.log("data",response.docs[0].data());
            // const newDoc = {
            //     id:response.docs[0].id,
            //     ...response.docs[0].data()
            // }
            // console.log(newDoc)
        }
        getData();
    },[tipoProducto])

    return(
        <div className="item-list-container">
            <p>item list container</p>
            <ItemList items={productos}/>
        </div>
    )
}