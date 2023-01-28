/* ###########################       
        IMPORTACIONES        
############################*/

// Modulos
// Estilos
import "./Footer.css";
// Componentes
// Core

/* ###########################       
        LOGICA        
############################*/
function Footer() {
    return (
      <div className="container">
      <footer className="d-flex flex-wrap align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="#" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          </a>
          <span>© 2022 Freelance video editor</span>
        </div>
      </footer>
    </div>
    );
}

/* ###########################       
        EXPORTACION        
############################*/

export default Footer