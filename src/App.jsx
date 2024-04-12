import { useEffect, useState } from 'react';
import {Outlet} from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import './App.css'
import { initializeShop } from './features/Items/allItems';

function App() {
const cartItems = useSelector((state) => state.itemsInCart);
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(initializeShop())
},[])
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
