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
        <footer className="py-5">
        <div className="row">
          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>
    
          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>
    
          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>
    
          <div className="col-4 offset-1">
            <form>
              
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
              </div>
            </form>
          </div>
        </div>
    
        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p>© 2021 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
          {/*   <li className="ms-3"><a className="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> */}
          </ul>
        </div>
      </footer>
    );
}

/* ###########################       
        EXPORTACION        
############################*/

export default Footer