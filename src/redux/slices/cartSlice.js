import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 0,
      imageUrl:
        "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/1.jpg?raw=true",
      tittle: "Мужские кроссовки Nike Blazer Mid Suede",
      price: 12999,
    },
    {
      id: 1,
      imageUrl:
        "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/2.jpg?raw=true",
      tittle: "Мужские кроссовки Nike Air Max 270",
      price: 15600,
    },
    {
      id: 2,
      imageUrl:
        "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/3.jpg?raw=true",
      tittle: "Мужские кроссовки Nike Blazer Mid Suede",
      price: 8499,
    },
    {
      id: 3,
      imageUrl:
        "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/4.jpg?raw=true",
      tittle: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8999,
    },
    {
      id: 4,
      imageUrl:
        "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/5.jpg?raw=true",
      tittle: "Мужские кроссовки Nike Kyrie 7",
      price: 5344,
    },
    {
      id: 5,
      imageUrl:
        "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/6.jpg?raw=true",
      tittle: "Мужские кроссовки Nike LeBron 18",
      price: 18900,
    },
    {
      id: 6,
      imageUrl:
        "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/7.jpg?raw=true",
      tittle: "Мужские кроссовки Nike Blazer Mid Suede",
      price: 14999,
    },
    {
      id: 7,
      imageUrl:
        "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/8.jpg?raw=true",
      tittle: "Мужские кроссовки Nike Blazer Mid Suede",
      price: 12999,
    },
    {
      id: 8,
      imageUrl:
        "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/9.jpg?raw=true",
      tittle: "Мужские кроссовки Nike Blazer Mid Suede",
      price: 13999,
    },
    {
      id: 9,
      imageUrl:
        "https://github.com/Archakov06/react-sneakers/blob/master/public/img/sneakers/10.jpg?raw=true",
      tittle: "Мужские кроссовки Nike Blazer Mid Suede",
      price: 11999,
    },
  ],
  catrItem: [],
  openCart: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItem(state, action) {
      state.catrItem.push({ ...action.payload });
    },
    setOpenCart(state, action) {
      state.openCart = action.payload;
    },
  },
});

export const { setCartItem, setOpenCart } = cartSlice.actions;

export default cartSlice.reducer;
