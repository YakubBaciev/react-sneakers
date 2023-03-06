import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartItem: [],
  openCart: true,
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
    },
    setOpenCart(state, action) {
      state.openCart = action.payload;
    },
    onClickDelete(state, action) {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { setCartItem, setOpenCart, setItems, onClickDelete } =
  cartSlice.actions;

export default cartSlice.reducer;
