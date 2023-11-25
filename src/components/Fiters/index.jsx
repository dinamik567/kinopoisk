import style from './style.module.css';
import { IconButton, Pagination, Paper, InputAdornment, TextField} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { SelectByCategories } from '../Sorting-categories/index.jsx';
import { Genres } from '../Genres/index.jsx';
import { useEffect } from 'react';
import { options, urlGenres} from '../../api.js';
import SearchIcon from '@mui/icons-material/Search';
import { SelectByYears } from '../Sorting-Years/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { filterInitialState } from '../../defaultSetting';
import { receiveGenres } from '../../store/filters/thunk.js';
import { 
    changeCategories,
    changeSelectedYears,
    resetFilters,
    changePage,
    searchValue,
} from '../../store/filters/filter-slice.js';


export function Filters() {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filter);
    const {
        genresDate,
        selectedByYear,
        selectedByCategories,
        paginationPage,
        inputSearch
    } = filters;
    
    useEffect(() => {
        (async () => dispatch(receiveGenres(urlGenres, options)))()
    }, [dispatch]);

    async function handleChangeSearchMovie(e) {
        dispatch(searchValue(e.target.value))
    }

    function handleChangeCategories(e) {
        dispatch(changeCategories(e.target.value))
    }

    function handleChangeYears(e) {
        dispatch(changeSelectedYears(e.target.value))
    }

    function handleClickResetFilters() {
        dispatch(resetFilters(filterInitialState));
    }

    function handleChangePage(e, value) {
        dispatch(changePage(value))
    }
    
    return (
        <Paper 
            component='aside'
            elevation={3}
            sx={{
                maxWidth: '300px',
                width: '100%',
                height: '723px', 
                padding: '16px',
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'column'
            }}>
            <form className={style.filters}>
                <div className={style.header}>
                    <h2 className={style.title}>Фильмы</h2>
                    <IconButton onClick={handleClickResetFilters}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <TextField
                        fullWidth
                        onChange={handleChangeSearchMovie}
                        value={inputSearch}
                        placeholder="Название фильма"
                        InputProps={{
                            endAdornment: 
                            <InputAdornment position='end'>
                                <IconButton>
                                    <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                        }}
                />
                <SelectByCategories 
                    categories={selectedByCategories} 
                    changeCategories={handleChangeCategories}
                />
                <SelectByYears 
                    years={selectedByYear}
                    changeYears={handleChangeYears}
                />
                <Genres listGenres={genresDate}/>
            </form> 
            <Pagination
                count={500} 
                siblingCount={0}
                color="primary"
                page={paginationPage}
                onChange={handleChangePage}
            />         
        </Paper>
    )
}