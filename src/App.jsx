import './App.css';
import { Stack } from '@mui/material';
import { Filters } from './components/Fiters';
import { Header } from "./components/Header/index.jsx";
import { ListMovies } from './components/List-movies';
import Cookies from 'js-cookie';
import { COOKIE_KEYS } from './defaultSetting';
function App() {  
  if (Cookies.get(COOKIE_KEYS.ACCOUNT_ID)) {
    return (
      <div className="App">
        <Header title={'Фильмы'}/>
        <Stack 
          sx={{padding: '16px'}}
          spacing={2}
          direction='row'
          justifyItems='stretch'
        >
          <Filters/>
          <ListMovies/>
        </Stack>    
      </div>
    );
  }

  return (
    <div className="App">
      <Header title={'Фильмы'}/> 
    </div>
  )
}

export default App;
