/* ###########################       
        IMPORTACIONES        
############################*/

// Modulos
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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Edicion de imagenes</a></li>
                <li><a class="dropdown-item" href="#">Edicion de videos</a></li>
                <li></li>
                <li><a class="dropdown-item" href="#">Sitio web</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
          </ul>
          <CardWidget cantidad= "2"></CardWidget>
        </div>
      </div>
    </nav>
    );
}

/* ###########################       
        EXPORTACION        
############################*/

export default NavBar