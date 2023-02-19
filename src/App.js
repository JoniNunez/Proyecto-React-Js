import "./App.css";
import React from 'react';
import {NavBar} from './components/navbar/NavBar'
import Home from './components/home/Home'
import AboutUs from './components/aboutUs/AboutUs'
import Contacto from './components/contacto/Contacto';
import {ItemListContainer} from './components/itemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/itemDetailContainer/ItemDetailContainer';
import Footer from './components/footer/Footer';
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
            <div>
                <NavBar/>
                <Routes>
                  <Route exact path='/' element={<Home/>} />
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
}

export default App;
