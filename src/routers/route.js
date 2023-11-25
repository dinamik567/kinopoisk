import App from "../App.jsx";
import { MovieDetails } from '../components/Movie-details/index.jsx'
import { createBrowserRouter } from "react-router-dom";
import { 
  ModalPostToken,
  action as postTokenAction
} from "../components/Modal-post-token/index.jsx";
import { 
  ModalGetToken,
  action as getTokenAction
} from "../components/Modal-get-token/index.jsx";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <div>Ошибка</div>
    },
    {
      path: 'movieDetails',
      element: <MovieDetails />,
    },
    {
      path: 'get-token',
      element: <ModalGetToken/>,
      action: getTokenAction,
    },
    {
      path: 'post-token',
      element: <ModalPostToken/>,
      action: postTokenAction
    }
  ])