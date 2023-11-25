import { useEffect, useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { IconButton } from "@mui/material";
import { controlFavoriteMovie } from "../../api.js";
import { useSelector } from "react-redux";

export function FavoriteButton({id}) {
    const favoriteMovies = useSelector(state => state.films.favoriteMovies);
    const [active, setActive] = useState(false);

    useEffect(() => {
       setActive(favoriteMovies.some( movie => movie.id === id))
    }, [id, favoriteMovies])

    async function handleClickFavorite() {	
		setActive(!active)
		controlFavoriteMovie(id, !active)
	}

    return (
        <IconButton onClick={handleClickFavorite}>
            {active ? <StarIcon sx={{color: 'orange'}}/> : <StarOutlineIcon />}
        </IconButton> 
    )
}

