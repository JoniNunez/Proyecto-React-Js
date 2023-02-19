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
                 to="/">INICIO</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Edicion de videos">VIDEOS</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Edicion de imagenes">IMAGENES</NavLink>
				 <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/sobreMi">SOBRE MI</NavLink>
				 <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/contacto">CONTACTO</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
