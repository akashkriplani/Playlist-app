import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
      addMovie(state, action) {
        // State referred to over here does not correspond to the big state object of the application
        // It only refers to the movies slice
        state.push(action.payload);
      },
      removeMovie(state, action) {
        // action.payload will be the name of the movie which needs to be removed, ergo, a string.
        const index = state.indexOf(action.payload);
        state.splice(index, 1);
      },
    },
  
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return [];
      })
    }
});
  
export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
  