import { CardMovie } from '../Card-movie/index.jsx';
import { Stack } from '@mui/material';
import { useEffect } from 'react';
import {options} from '../../api.js';
import Cookies from 'js-cookie';
import {  useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COOKIE_KEYS } from '../../defaultSetting.js';
import { receiveMovies, receiveFavoriteMovies, receiveSearchResult } from '../../store/films/thunk.js';

export function ListMovies() {

    const dispatch = useDispatch();
    const films = useSelector(state => state.films);
    const filter = useSelector(state => state.filter);
    const {
        listMovies,
        listOfFoundMovies,
    } = films;


    const {
        inputSearch,
        pagiantionPage, 
        selectedByCategories, 
    } = filter;

    const accountId = Cookies.get(COOKIE_KEYS.ACCOUNT_ID);
    
    useEffect(() => {
        (async () => {
            dispatch(receiveMovies(selectedByCategories, pagiantionPage, options))
            dispatch(receiveFavoriteMovies(accountId));
            dispatch(receiveSearchResult(inputSearch))
        })()
    }, [accountId, dispatch, pagiantionPage, selectedByCategories, inputSearch]);

    const movies = useMemo(() => {
        return listOfFoundMovies.length === 0 ? listMovies : listOfFoundMovies;
    }, [listMovies, listOfFoundMovies])

    return (
        <Stack 
            direction='row'
            justifyItems='flex-start'
            justifyContent='flex-start'
            flexWrap={'wrap'}
        >
            {movies?.map(movie => {
                return (
                    <CardMovie key={movie.id} movie={movie}/>
                )
            })}
        </Stack>        
    )
}