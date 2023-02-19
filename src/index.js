/*#######################
      IMPORTACIONES        
########################*/

// modulos

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// estilos
import './index.css';

// componentes
import App from './App';

// core 
import reportWebVitals from './reportWebVitals';

/*#######################          
          LOGICA            
########################*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App />
</>,
document.getElementById('root')
);

/*#######################
        Exportacion
########################*/

reportWebVitals();
