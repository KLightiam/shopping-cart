import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUrl = "https://fakestoreapi.com/products";

async function fetchData(){
    let fetchSite = await axios.get(fetchUrl);
    let data = await fetchSite.json();
    return data;
}



const initialState = [];

const itemsInCartSlice = createSlice({
    name: "itemsInCart",
    initialState,
    reducers:{
        addToCart(state,action){
            state.push(action.payload);
        },
        removeFromCart(state,action){
            const newState = state.filter((item)=>{
                item.id != action.payload.id
            })
            return newState;
        }
    }
})



export const {addToCart, removeFromCart} = itemsInCartSlice.actions;

export default itemsInCartSlice.reducer;