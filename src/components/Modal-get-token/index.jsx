import style from './style.module.css';
import { Button, Stack, TextField} from "@mui/material"
import { useNavigate, Form, redirect } from "react-router-dom"
import Cookies from 'js-cookie';
import { COOKIE_KEYS } from '../../defaultSetting.js';

export async function action({request}) {
    const formData = await request.formData();
    const date = Object.fromEntries(formData);
    const email = date.email;
    Cookies.set(COOKIE_KEYS.EMAIL, email);

    return redirect `/post-token`;
}

export function ModalGetToken() {
    const navigate = useNavigate();

    function handleClickCancel() {
        navigate(-1)
    }

    return (
        <div className={style.wrapper}>
            <Form 
                className={style.modal}
                method='post'
            >
                <h2 className={style.title}>Запросить токен</h2>
                <TextField
                    sx={{marginBottom: '30px'}}
                    fullWidth
                    size='small'
                    label='почта' 
                    variant='standard'
                    name='email'
                />
                <Stack
                    direction={'row'} 
                    spacing={1.5}
                    justifyContent={'flex-end'}
                >
                    <Button type='submit' onClick={handleClickCancel} variant="outlined">Отмена</Button>
                    <Button type='submit' variant="outlined">Запросить</Button>
                </Stack>
            </Form>
         </div>        
    )
}
