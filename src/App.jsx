import { useEffect, useState } from 'react';
import {Outlet} from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import './App.css'

function App() {
const cartItems = useSelector((state) => state.itemsInCart);
console.log(cartItems)
  return (
    <>
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="shop">Shop</Link></li>
        <li><Link to="cart">Cart {cartItems.length}</Link></li>
      </ul>
      <Outlet />
      
    </>
  )
}

export default App
