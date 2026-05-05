import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ShopState = {
  showCategories: boolean;
  searchQuery: string;
};

const initialState: ShopState = {
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
    showCategoriesMenu(state) {
      state.showCategories = true;
    },
    hideCategoriesMenu(state) {
      state.showCategories = false;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  toggleCategoriesMenu,
  showCategoriesMenu,
  setSearchQuery,
  hideCategoriesMenu,
} = shopSlice.actions;

export default shopSlice.reducer;
