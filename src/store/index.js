import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

export const reset = createAction('app/reset');

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
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    })
  }
});

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
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    })
  }
});


const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer
  },
});

export { store };

export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
