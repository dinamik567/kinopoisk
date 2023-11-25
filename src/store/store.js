import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  { filmsReducer }  from './films/films-slice.js';
import { filterReducer } from './filters/filter-slice.js';

const rootReducer = combineReducers({
  films: filmsReducer,
  filter: filterReducer
})


export const store = configureStore({
  reducer: rootReducer
});

