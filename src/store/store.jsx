import { configureStore } from "@reduxjs/toolkit";
import cart from "../features/Items/itemsInCartSlice";
import shop from "../features/Items/allItems";

const store = configureStore({
  reducer: {
    itemsInCart: cart,
    allItems: shop,
  },
});

export default store;
