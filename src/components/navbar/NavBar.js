/* ###########################       
        IMPORTACIONES        
############################*/

// Modulos

import { Link } from "react-router-dom";

// Estilos
import "./NavBar.css";

// Componentes
import CardWidget from "../cardWidget/CardWidget";
// Core

/* ###########################       
        LOGICA        
############################*/
function NavBar() {
    return (
      <div className="row-fluid" >
      <nav className="navbar navbar-expand-lg bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#"></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-center" id="navbarNav">
					<ul className="navbar-nav width-nav">
						<li className="nav-item">
							<button className="rounded-3 m-2"><Link to="/">Home</Link></button>
						</li>
						<li className="nav-item">
							<button className="rounded-3 m-2"><Link to="/servicios">Servicios</Link></button>
						</li>
						<li className="nav-item">
						<button className="rounded-3 m-2"><Link to="/sobremi">Sobre mi</Link></button>
						</li>
						<li className="nav-item">
							<button className="rounded-3 m-2"><Link to="/contacto">Contacto</Link></button>
						</li>
					</ul>
				</div>
				<CardWidget></CardWidget>
			</div>
		</nav>
    </div>
    );
}

/* ###########################       
        EXPORTACION        
############################*/

export default NavBar