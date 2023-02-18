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
import {NavBar} from './components/navbar/NavBar'
import Home from './components/home/Home'
import AboutUs from './components/aboutUs/AboutUs'
import Contacto from './components/contacto/Contacto';
import {ItemListContainer} from './components/itemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/itemDetailContainer/ItemDetailContainer';
import Footer from './components/footer/Footer';
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';

// core 
import reportWebVitals from './reportWebVitals';

/*#######################          
          LOGICA            
########################*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <BrowserRouter>
    <div className="App">
        <div>
            <NavBar/>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/' element={<ItemListContainer />}/>
              <Route path="/productos/:tipoProducto" element={<ItemListContainer />}/>
              <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<CartContainer/>}/>
              <Route exact path='/sobremi' element={<AboutUs/>} />
              <Route exact path='/contacto' element={<Contacto/>} />
            </Routes>
            <Footer/>
        </div>
    </div>
  </BrowserRouter>
</CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*#######################
        Exportacion
########################*/

reportWebVitals();
