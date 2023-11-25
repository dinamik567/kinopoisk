import style from './style.module.css';
import { Header } from "../Header/index.jsx";
import { Stack, Box, IconButton} from "@mui/material";
import { baseUrl } from '../../defaultSetting';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { getUrlMovieDetails, options } from '../../api.js';
import { useEffect, useState } from 'react';
import { TableInfoAboutMovie } from '../Table-info-about-movie/index.jsx';
import { ERROR_MESSAGES } from '../../defaultSetting';
import { useSelector } from 'react-redux';

export function MovieDetails() {
    const movieId = useSelector(state => state.films.movieId)

    const [ movieInfo, setMovieInfo ] = useState({});
    useEffect(() => {
        async function getMovieDetails() {
 
            const urlMovieDetails = getUrlMovieDetails(movieId)
            const response = await fetch(urlMovieDetails, options);
            
            if (!response.ok) {
                throw new Error(ERROR_MESSAGES.MOVIE_DETAILS);
            }
            const json = await response.json();
            setMovieInfo(json);
        }

        getMovieDetails()
    },[movieId])

    const { 
        title, 
        poster_path, 
        overview, 
    } = movieInfo;
    
    const poster_url = baseUrl + poster_path;
    const navigate = useNavigate();

    function handleClickBack() {
        return navigate(-1)
    }
    return (
        <div className="App">
            <Header title={`Фильмы - ${title}`}/>  
            <Stack style={{padding: '16px'}} direction={'row'} spacing={2}>
                <img className={style.poster} src={poster_url} alt={'Постер фильма'} />
                <div className={style.content}>
                    <h2 className={style.title}>{title}</h2>
                    <Box component={'div'} sx={{marginBottom: '10px', fontSize: '20px'}}>
                        {overview}
                    </Box>   
                    <IconButton onClick={handleClickBack}>
                        <ArrowBackIcon/>    
                    </IconButton>
                    <TableInfoAboutMovie tableInfo={movieInfo}/>                                  
                </div>
            </Stack>
        </div>
    )
}