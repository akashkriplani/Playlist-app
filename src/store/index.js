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
      // TODO
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

const startingState = store.getState();

console.log(startingState);

store.dispatch(songsSlice.actions.addSong('New Song!'));

const finalState = store.getState();

console.log(finalState);
