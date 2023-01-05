import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      // State referred to over here does not correspond to the big state object of the application
      // It only refers to the songs slice
      state.push(action.payload);
    },
    removeSong(state, action) {
      // action.payload will be the name of the song which needs to be removed, ergo, a string.
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

export { store };

export const { addSong, removeSong } = songsSlice.actions;