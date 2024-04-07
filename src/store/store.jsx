import { configureStore } from "@reduxjs/toolkit";
import cart from "../features/Items/itemsInCartSlice";



const store = configureStore({
    reducer:{
        itemsInCart: cart,
    }
})


export default store;