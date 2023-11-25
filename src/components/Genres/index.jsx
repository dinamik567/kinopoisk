import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { useMemo } from "react";

export function Genres({listGenres}) {
    const dateGenres = useMemo(() => {
        return [...listGenres]
    }, [listGenres]);
    
    return (
        <Autocomplete
            multiple
            id="checkboxes-genres"
            options={dateGenres}
            ChipProps={{color: "primary"}}
            disableCloseOnSelect
            getOptionLabel={(option) => option.name}
            renderOption={(props, option, { selected }) => (
            <li {...props}>
                <Checkbox
                style={{ marginRight: 8 }}
                checked={selected}
                />
                {option.name}
            </li>
            )}
            renderInput={(params) => (
            <TextField {...params} label="Жары" placeholder="Выбери жанр" />
            )}
        >
        </Autocomplete>
    )
}