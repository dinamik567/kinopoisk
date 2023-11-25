import style from './style.module.css';
import { Button, Stack, TextField} from "@mui/material"
import { useNavigate, redirect, Form } from 'react-router-dom';
import { TOKEN as userToken } from '../../api.js';
import { getUserId } from '../../api.js';
import  Cookies  from 'js-cookie';
import { COOKIE_KEYS } from '../../defaultSetting';
export async function action({request}) {
    const formData = await request.formData()
    const date = Object.fromEntries(formData);
    const token = date.token

    if (token === userToken) {
        const user = await getUserId();
        Cookies.set(COOKIE_KEYS.ACCOUNT_ID, user.id)
        
        return redirect `/`;
    }
    console.log('попробуйте заного')

    return null
}


export function ModalPostToken() {
    const navigate = useNavigate()

    function handleClickCancel() {
        navigate(-1)
    }

    return (
        <div className={style.wrapper}>
            <Form method='post' className={style.modal}>
                <h2 className={style.title}>Введите токен</h2>
                <TextField
                    sx={{marginBottom: '30px'}}
                    fullWidth
                    size='small'
                    label='токен' 
                    variant='standard'
                    name='token'
                />
                <Stack
                    direction={'row'} 
                    spacing={1.5}
                    justifyContent={'flex-end'}
                >
                    <Button onClick={handleClickCancel} variant="outlined">Отмена</Button>
                    <Button type='submit' variant="outlined">Ок</Button>
                </Stack>
            </Form>
        </div>
    )
}
