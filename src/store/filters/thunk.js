import { getGenres} from '../../api.js';
import { fetchGenres } from './filter-slice.js'

export function receiveGenres(urlGenres, options) {
    return async (dispatch) => {
        const dateAboutGenres = await getGenres(urlGenres, options);
        const genres = dateAboutGenres.map(genre => ({...genre, isChecked: false}));
        dispatch(fetchGenres(genres))
    }
} 