import style from './style.module.css';
import { InputLabel, Select, MenuItem} from "@mui/material";

export function SelectByCategories({categories, changeCategories}) {
    return (
        <div className={style.categories}>
            <InputLabel className={style.label}>Сортировать по:</InputLabel>
            <Select 
                value={categories}
                onChange={changeCategories}
                fullWidth
                variant="standard"
            >
                {/* TODO вынести value в константы */}
                <MenuItem value={'popular'}>по популярности</MenuItem>
                <MenuItem value={'top_rated'}>по рейтингу</MenuItem>
            </Select>
        </div>
    )
}
