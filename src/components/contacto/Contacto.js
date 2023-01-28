/* ###########################       
        IMPORTACIONES        
############################*/

// Modulos
// Estilos
import "./Contacto.css";
// Componentes
// Core

/* ###########################       
        LOGICA        
############################*/
function Contacto() {
    return (
        <article className="box-contact row align-items-center justify-content-center">
        <form clasNames="col-lg-6 col-10 bg-dark bg-opacity-75">
            <div className="form-floating m-2">
                <input>
                </input>
                <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating m-2">
                <input>
                </input>
                <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating m-2">
                <select className="form-select" id="floatingSelect" name="select" aria-label="Floating label select example">
                    <option value="Short videos">Short Videos</option>
                    <option value="Stock videos">Stock Videos</option>
                    <option value="Other">Other</option>
                </select>
                <label for="floatingSelect">Type of video you need</label>
            </div>
            <div className="form-floating m-2">
                <textarea class="form-control" placeholder="Leave a comment here" name="message" id="floatingTextarea2"></textarea>
                <label for="floatingTextarea2">Comments</label>
            </div>
            <div className="form-floating m-2 text-center">
                <button type="submit" class="btn btn-primary">Send</button>
                <button type="reset" class="btn btn-primary">Clear</button>
            </div>
        </form>
    </article>
    );
}

/* ###########################       
        EXPORTACION        
############################*/

export default Contacto