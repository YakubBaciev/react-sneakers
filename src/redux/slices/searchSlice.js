import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
};

export const searchSlise = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlise.actions;

export default searchSlise.reducer;
