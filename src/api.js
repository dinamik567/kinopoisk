import { ERROR_MESSAGES } from './defaultSetting.js'
export const TOKEN = process.env.REACT_APP_TOKEN;

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`
  }
};
  
const userIdUrl = 'https://api.themoviedb.org/3/account/account_id';
export const urlGenres = 'https://api.themoviedb.org/3/genre/movie/list?language=ru';

export function getUrlMovieDetails(id) {
  return `https://api.themoviedb.org/3/movie/${id}?language=ru`
}

export function getUrlMovies(categories, page) {
  return `https://api.themoviedb.org/3/movie/${categories}?language=ru&page=${page}`
}

export function getUrlMovie(seach) {
  return `https://api.themoviedb.org/3/search/movie?query=${seach}&include_adult=false&language=ru&page=1`
}

export async function getUserId() {
 try {
  const response = await fetch(userIdUrl, options);
  const json = await response.json()
  return json
  
 } catch {
  throw new Error(ERROR_MESSAGES.GET_USER);
 }
}

export async function getGenres(urlGenres, options) {
  const response = await fetch(urlGenres, options);
  
  if (!response.ok) {
    throw new Error(ERROR_MESSAGES.GET_GENRES);
  }

  const json = await response.json();
  const arrayGenres = json.genres;
  return arrayGenres;
}

export async function controlFavoriteMovie(movieId, isFavorite) {
  const urlControlFavoriteMovie = `https://api.themoviedb.org/3/account/${movieId}/favorite
  `;
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    }, 
    body: JSON.stringify({ media_type: "movie", media_id: movieId, favorite: isFavorite })
  };


  try {
    fetch(urlControlFavoriteMovie, options)
      .catch(err => console.error(err))
  } catch {
    throw new Error(ERROR_MESSAGES.CHANGE_STATUS_FAVORITE_MOVIES)
  }
}


export async function getMovies(category, page, options) {
  
  const urlMovies = getUrlMovies(category, page)
  const response = await fetch(urlMovies, options);

  if (!response.ok) {
      throw new Error(ERROR_MESSAGES.GET_LIST_MOVIES)
  }

  const json = await response.json();
  return json.results
}

export async function getFavoriteMovies(accountId) {
  const urlFavoriteMovie =  `https://api.themoviedb.org/3/account/${accountId}/favorite/movies`;

  try {
      const response = await fetch(urlFavoriteMovie, options);
      const json = await response.json();
      const results = json.results
      return results;

  } catch {
    throw new Error(ERROR_MESSAGES.GET_LIST_FAVORITE_MOVIES)
  }
}


export async function getSearchResult(search) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=ru&page=1`;
  
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    const searchResults = json.results;
    return searchResults;
  } catch {
    throw new Error(ERROR_MESSAGES.GET_SEARCH_MOVIES);
  }
}
