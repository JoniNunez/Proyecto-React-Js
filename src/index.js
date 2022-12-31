/*#######################
      IMPORTACIONES        
########################*/

// modulos

import React from 'react';
import ReactDOM from 'react-dom/client';

// estilos
import './index.css';

// componentes
import App from './App';
import NavBar from './components/navbar/NavBar.js'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Footer from './components/footer/Footer';

// core 
import reportWebVitals from './reportWebVitals';

/*#######################          
          LOGICA            
########################*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <ItemListContainer></ItemListContainer>
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*#######################
        Exportacion
########################*/

reportWebVitals();
