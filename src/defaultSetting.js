export const baseUrl = 'http://image.tmdb.org/t/p/original';

export const COOKIE_KEYS = {
  EMAIL: 'email',
  ACCOUNT_ID: 'account_id',

}

export const FILMS_ACTION = {
  GET_LIST_MOVIES: 'receive_movies_object',
  SET_MOVIE_ID: 'set_movie_id',
  GET_MOVIES_FAVORITE: 'get_movies_favorite',
  FOUND_MOVIE: 'found_movie',
}

export const FILTER_ACTION = {
  CHANGE_CATEGORIES: 'change_categories',
  FETCH_GENRES: 'fetch_genres',
  CHANGE_SELECTED_YEARS: 'change_selected_years',
  RESET_FILTERS: 'reset_filters',
  CHANGE_PAGE: 'change_page',
  SEARCH_VALUE: 'search_value',
}

export const filmsInitialState = {
  listMovies: [],
  movieId: null,
  favoriteMovies: [],
  listOfFoundMovies: [],
}

export const filterInitialState = {
  selectedByCategories: 'popular',
  selectedByYear: [2002, 2012],
  genresDate: [],
  listMovies: [],
  pagiantionPage: 1,
  inputSearch: '',
}


export const ERROR_MESSAGES = {
  GET_MOVIE_DETAILS: 'Ошибка при получении деталей фильма',
  GET_USER: 'Ошибка при извлечении данных о пользователе',
  CHANGE_STATUS_FAVORITE_MOVIES: 'Ошибка при изменении статуса избранных фильмов',
  GET_LIST_MOVIES: 'Ошибка при получении списка фильмов',
  GET_LIST_FAVORITE_MOVIES: 'Ошибка при получении избранных фильмов',
  GET_GENRES: 'Ошибка при получении данных о жанрах с сервера',
  GET_SEARCH_MOVIES: 'Ошибка при получении поискового запроса'
}

export const MARKS = [
  {value: 1980},
  {value: 1990},
  {value: 2000},
  {value: 2010},
  {value: 2020}
]

