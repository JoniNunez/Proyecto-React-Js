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
import NavBar from './components/navbar/NavBar.js'
import Home from './components/home/Home'
import AboutUs from './components/aboutUs/AboutUs'
import Contacto from './components/contacto/Contacto';
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

    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/servicios' element={<ItemListContainer greeting='Estamos en Servicios' />} />
          <Route exact path='/sobremi' element={<AboutUs/>} />
          <Route exact path='/contacto' element={<Contacto/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*#######################
        Exportacion
########################*/

reportWebVitals();
