/* ###########################       
        IMPORTACIONES        
############################*/

// Modulos
// Estilos
import "./ItemListContainer.css";

// Componentes
import shortvideo from "./shortvideo.png"
import stockvideo from "./stockvideo.png"

// Core

/* ###########################       
        LOGICA        
############################*/
function ItemListContainer() {
    return(
        <div className="row">
            <div className="col">
                <div className="d-flex justify-content-center">
                    <div className="card">
                        <a href="pages/shortvideos.html" target="_blank"><img src={shortvideo}
                                className="card-img-top"></img></a>
                        <div className="card-body">
                            <h5 className="card-title">SHORT VIDEOS</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="d-flex justify-content-center">
                    <div className="card">
                        <a href="pages/stockvideos.html" target="_blank"><img src={stockvideo}
                        className="card-img-top"></img></a>
                        <div className="card-body">
                            <h5 className="card-title">STOCK VIDEOS</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
};

/* ###########################       
        EXPORTACION        
############################*/

export default ItemListContainer