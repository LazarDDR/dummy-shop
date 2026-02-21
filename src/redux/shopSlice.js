import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCategories: false,
  searchQuery: "",
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    toggleCategoriesMenu(state) {
      state.showCategories = !state.showCategories;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { toggleCategoriesMenu, setSearchQuery } = shopSlice.actions;

export default shopSlice.reducer;
