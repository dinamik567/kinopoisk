import { getMovies, getFavoriteMovies, getSearchResult } from '../../api.js';
import { getListMovies, getMoviesFavorite, foundMovies} from './films-slice.js';

export function receiveMovies(selectedByCategories, pagiantionPage, options) {
    return async (dispatch) => {
        const movies = await getMovies(selectedByCategories, pagiantionPage, options);
        dispatch(getListMovies(movies))
    }
}


export function receiveFavoriteMovies(accountId) {
    return async (dispatch) => {
        const favoriteMovies = await getFavoriteMovies(accountId);
        dispatch(getMoviesFavorite(favoriteMovies))
    }
}


export function receiveSearchResult(inputSearch) {
    return async (dispatch) => {
        const listOfFoundMovies = await getSearchResult(inputSearch);
        dispatch(foundMovies(listOfFoundMovies))
    }
}