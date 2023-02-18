import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import {db} from "../../services/firebase";

export const CartContainer = () => {
  const {productCartList, clearProductCartList} = useContext(CartContext);
  const [orderId, setOrderId] = useState(undefined);
  console.log(productCartList)

  const sendOrder = async(event)=>{
    const newOrder = {
      buyer:{
        name :"fredy",
        phone :"87126871632",
        email:"fredy@gmail.com"
      },
      items: productCartList,
      total: 1250,
    };
    console.log(newOrder)
    const queryRef = collection(db,"orders");
    const response = await addDoc(queryRef,newOrder);
    console.log(response)
    setOrderId(response.id);
  }

  const updatePrice = async()=>{
    try {
      const queryRef = doc(db, "listaServicios","5QQR7IIpcbL8BEA8UaPp");
      await updateDoc(queryRef,{price:111});
      console.log("producto actualizado");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <p>CartContainer</p>
      <p>Su numero de pedido es {orderId}</p>
      <div>
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(item=>(
                <CartItem key={item.id} item={item}/>
              ))
            }
            <hr/>
            <button onClick={clearProductCartList}>Vaciar el carrito</button>
          </>
          :
          <p>No has agregado productos</p>
        }
      </div>
      <button onClick={sendOrder}>Enviar formulario</button>
      <button onClick={updatePrice}>Actualizar el precio de un producto</button>
    </div>
  )
}
