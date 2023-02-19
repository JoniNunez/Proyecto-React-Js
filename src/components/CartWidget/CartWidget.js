import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Carrito from "../../img/Carrito.png";
import './CartWidget.css'

export const CartWidget = ()=>{
    const {getTotalProducts, productCartList} = useContext(CartContext);

    return(
        <div>
            {
                productCartList.length>0 &&
                <div>
                    <Link to="/cart">
                        <img src={Carrito} alt="Carrito"/>
                    </Link>
                    <span className='Numero' >
                        {getTotalProducts()}
                    </span>
                </div>
            }
        </div>
    )
}