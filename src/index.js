import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from './componentes/ItemDetailContainer.js';
import ItemDetailContainer2 from './componentes/ItemDetailContainer2.js';
import NavBar from './componentes/Navbar.js';
import Footers from './componentes/Footers.js';
import { CartProvider } from './context/cartContext';
import { CartContainer } from './componentes/CartContainer';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <CartProvider>
  <BrowserRouter>
  <NavBar/> 
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/category/Trustmaster' element={<ItemDetailContainer2 params={["Trustmaster" , "brand"]}/>}/>
      <Route path='/category/Logitech' element={<ItemDetailContainer2 params={["Logitech", "brand"]}/>}/>
      <Route path='/category/Xbox' element={<ItemDetailContainer2 params={["Xbox", "platform"]}/>}/>
      <Route path='/category/Ps' element={<ItemDetailContainer2 params={["PS", "platform"]}/>}/>
      <Route path='/detail/item/:id' element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<CartContainer/>}/>
    </Routes>
    <Footers/>
    </BrowserRouter>
    </CartProvider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
