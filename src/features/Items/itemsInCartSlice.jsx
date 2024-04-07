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
                item.id != action.payload.id
            })
            return newState;
        }
    }
})



export const {addToCart, removeFromCart} = itemsInCartSlice.actions;

export default itemsInCartSlice.reducer;