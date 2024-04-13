import { createSlice } from "@reduxjs/toolkit";



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
                return item.id != action.payload.id;
            })
            return newState;
        },
        resetCart(state,action){
            return [];
        }
    }
})



export const {addToCart, removeFromCart, resetCart} = itemsInCartSlice.actions;

export default itemsInCartSlice.reducer;