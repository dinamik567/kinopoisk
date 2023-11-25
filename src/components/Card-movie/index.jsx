import { Card, CardMedia, CardContent, Typography, CardActions, Box} from '@mui/material';
import { baseUrl } from '../../defaultSetting.js';
import { Link } from 'react-router-dom'
import { FavoriteButton } from '../Favorite-button/index.jsx';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { setMovieId } from '../../store/films/films-slice.js'

export const CardMovie = memo( function CardMovie({movie}) {
	const dispatch = useDispatch();
    const { poster_path, title, id} = movie;

	function handleClickMovieDetails() {
		dispatch(setMovieId(id))	
	}

    return (
      <Card
			key='card_film'
			sx={{
				width: '270px',
				height: '577px',
				margin: '20px',
				display: 'flex',
				flexWrap: 'wrap',
			}}
		>
			<CardMedia
				key='card_image'
				sx={{
					height: '420px',
					width: '270px',
					objectFit: 'fill',
				}}
				image={baseUrl + poster_path}
			/>
			<Box key='box' sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
				<CardContent sx={{ marginTop: 'auto' }}>
					<Typography gutterBottom variant='h5' component='div'>
						<Link onClick={handleClickMovieDetails} to={'movieDetails'}>{title}</Link>
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						рейтиг 9
					</Typography>
				</CardContent>
				<CardActions>
					<FavoriteButton id={id}/>
				</CardActions>
			</Box>
		</Card>
    )
})