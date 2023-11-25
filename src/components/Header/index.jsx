import style from './style.module.css'
import {IconButton} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

export function Header({title}) {

    const navigate = useNavigate();
    return (
        <header className={style.header}>
            <h1 className={style.name}>
                {title}
            </h1>

            <IconButton 
                sx={{color: 'white', height: '32px'}}
                onClick={() => navigate('get-token')}
            >
                <AccountCircleIcon />
            </IconButton>
        </header>
    )
}