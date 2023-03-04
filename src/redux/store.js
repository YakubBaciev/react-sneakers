import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slices/cardSlice";
import cartSlice from "./slices/cartSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: { cardSlice, cartSlice, searchSlice },
});
