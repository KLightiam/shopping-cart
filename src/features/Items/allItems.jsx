import { createSlice } from "@reduxjs/toolkit";

const fetchUrl = "https://fakestoreapi.com/products";

const allItemsSlice = createSlice({
    name:"allItems",
    initialState:[],
    reducers:{
        appendItems(state,action){
            return action.payload;
        }
    }
})


const {appendItems} = allItemsSlice.actions;


export const initializeShop = () => {
    return async (dispatch) => {
        let fetchSite = await fetch(fetchUrl);
        let data = await fetchSite.json();
        dispatch(appendItems(data));
    }
}

export default allItemsSlice.reducer;