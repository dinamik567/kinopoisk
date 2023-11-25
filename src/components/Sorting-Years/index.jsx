import { InputLabel, Slider } from '@mui/material';
import { MARKS } from '../../defaultSetting.js';

export function SelectByYears({years, changeYears}) {    
    
    return (
        <>
            <InputLabel sx={{
                padding: '16px 0',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '150%',
                fontFamily: 'Roboto',
                color: 'rgba(0, 0, 0, 0.87)'
            }}>Год релиза:</InputLabel>
            <Slider
                sx={{marginTop: '24px'}} 
                getAriaLabel={() => 'sort by categories'}
                marks={MARKS}
                value={years}
                onChange={changeYears}
                valueLabelDisplay='on'
                step={1}
                min={1970}
                max={2023}
            />
        </>
    )
}