import { configureStore } from "@reduxjs/toolkit";
import getRecipeReducer from "../features/getRecipeSlice";

export const store = configureStore({
  reducer: {
    getRecipe: getRecipeReducer,
  },
});
