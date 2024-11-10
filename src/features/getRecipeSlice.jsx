import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Asenkron işlemi `createAsyncThunk` ile tanımlayın
export const getRandomRecipe = createAsyncThunk(
  "getRecipe/fetchRandomRecipe",
  async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    return response.data; // API'den dönen veriyi return ediyoruz
  }
);

const getRecipeSlice = createSlice({
  name: "getRecipe",
  initialState: {
    data: [],
    status: "idle", // yükleme durumunu izlemek için bir alan
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomRecipe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRandomRecipe.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.meals;
      })
      .addCase(getRandomRecipe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default getRecipeSlice.reducer;
