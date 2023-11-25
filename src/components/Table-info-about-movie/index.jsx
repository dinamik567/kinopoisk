import { tableTitle, table } from "./style.js";
import { 
    TableContainer,
    Table,
    TableBody, 
    TableRow, 
    TableCell, 
    Box
} from "@mui/material"
import { getStirngValues } from "./utils.js";

export function TableInfoAboutMovie({ tableInfo }) {
    const {
        production_countries, 
        release_date,
        genres, 
        budget,
        runtime 
    } = tableInfo;

    const listCountries = getStirngValues(production_countries);
    const listGenres = getStirngValues(genres);
    const budgetInDollars = budget + '$';
    const time = runtime + 'минут';
    return (
        <>
            <Box sx={tableTitle}>
                Детали
            </Box>
            <TableContainer sx={table}>
                <Table>
                    <TableBody>
                        <TableRowMui 
                            name={'Страны'}
                            value={listCountries} 
                        />
                        <TableRowMui
                            name={'Дата релиза'}
                            value={release_date}
                        />
                        <TableRowMui 
                            name={'Жанры'}
                            value={listGenres} 
                        />
                        <TableRowMui
                            name={'Бюджет'}
                            value={budgetInDollars}
                        />
                        <TableRowMui
                            name={'Время'}
                            value={time}
                        />
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}


function TableRowMui({name, value}) {
    return (
        <TableRow>
            <TableCell align="left">
                { name }
            </TableCell>
            <TableCell align="left">
                { value }
            </TableCell>
        </TableRow>
    )
}
