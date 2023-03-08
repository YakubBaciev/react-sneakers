import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSneakers = createAsyncThunk(
  "cart/fetchSneakersStatus",
  async () => {
    const { data } = await axios.get(
      "https://639c95a242e3ad6927364e55.mockapi.io/sneakers"
    );
    return data;
  }
);

const initialState = {
  items: [],
  cartItem: [],
  totalPrice: 0,
  status: "loading", //loading|success|error
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setCartItem(state, action) {
      state.cartItem.push(action.payload);
      state.totalPrice = state.cartItem.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    setOpenCart(state, action) {
      state.openCart = action.payload;
    },
    onClickDelete(state, action) {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
      state.totalPrice = state.cartItem.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    setClearCart(state) {
      state.totalPrice = 0;
      state.cartItem = [];
    },
  },
  extraReducers: {
    [fetchSneakers.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchSneakers.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succes";
    },
    [fetchSneakers.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const {
  setCartItem,
  setOpenCart,
  setItems,
  onClickDelete,
  setTotalPrice,
  setClearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
