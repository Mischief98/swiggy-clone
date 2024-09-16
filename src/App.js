import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import Main from "./component/Main";
import Search from "./component/Search";
import Cart from "./component/Cart";
import Help from "./component/Help";
import Contact from "./component/Contact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./login.css";
import "./App.css"
import "./register.css";
import "./main.css";
import "./search.css";
import "./help.css"
import "./contact.css"
import "./cart.css"
import "./delivery.css"
import RestaurantDetails from "./component/ResturantDetails";
import "./ResturantDetails.css"
import { CartProvider } from "./component/CartContext";
import Delivery from "./component/Delivery";
const App = () => {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path = "/hotel" element ={<RestaurantDetails/>}/>
        <Route path = "/delivery" element={<Delivery/>}/>
        </Routes>
    </BrowserRouter>
    </CartProvider>
  );
};

export default App;
