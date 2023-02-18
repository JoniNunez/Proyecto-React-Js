import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import logo from '../../img/logo.png';
import {NavLink, Link} from 'react-router-dom';

export const NavBar = () =>{
    return(
        <nav className='nav-container'>
            <Link to="/">
                <div>
                    <img className="nav-brand" src={logo}/>
                </div>
            </Link>
            <div className='navegacion'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/camisas">Edicion de videos</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/zapatos">Edicion de imagenes</NavLink>
				 <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/sobreMi">Sobre mi</NavLink>
				 <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/contacto">Contacto</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
