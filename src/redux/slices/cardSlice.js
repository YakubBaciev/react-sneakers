import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const cardSlise = createSlice({
  name: "card",
  initialState,
  reducers: {},
});

export const {} = cardSlise.actions;

export default cardSlise.reducer;
