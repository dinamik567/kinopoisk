import { createSlice } from "@reduxjs/toolkit";
import { filterInitialState } from "../../defaultSetting";

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: filterInitialState,
    reducers: {
        changeCategories: (state, action) => ({ ...state, selectedByCategories: action.payload }),
        changeSelectedYears: (state, action) => ({ ...state, selectedByYear: action.payload }),
        resetFilters: () => ({ ...filterInitialState }),
        changePage: (state, action) => ({ ...state, pagiantionPage: action.payload }),
        searchValue: (state, action) => ({ ...state, inputSearch: action.payload }),
        fetchGenres: (state, action) => ({ ...state, genresDate: action.payload })
    }
})

export const filterReducer = filterSlice.reducer;
export const {
    changeCategories,
    changeSelectedYears,
    resetFilters,
    changePage,
    searchValue,
    fetchGenres
} = filterSlice.actions;





