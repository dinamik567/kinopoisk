import { createSlice } from "@reduxjs/toolkit";
import { filmsInitialState } from "../../defaultSetting";

export const filmsSlice = createSlice({
    name: 'films',
    initialState: filmsInitialState,
    reducers: {
        getListMovies: ( state, action ) => ({...state, listMovies: action.payload}),
        setMovieId: ( state, action ) => ({...state, movieId: action.payload}),
        getMoviesFavorite: (state, action) => ({...state ,favoriteMovies: action.payload}),
        foundMovies: (state, action) => ({...state, listOfFoundMovies: action.payload})
    }
})

export const filmsReducer = filmsSlice.reducer;
export const { getListMovies, setMovieId, getMoviesFavorite, foundMovies } = filmsSlice.actions
