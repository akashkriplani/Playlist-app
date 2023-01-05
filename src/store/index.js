import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
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

store.dispatch({ type: 'song/addSong', payload: 'New song!'});

const finalState = store.getState();

console.log(finalState);
