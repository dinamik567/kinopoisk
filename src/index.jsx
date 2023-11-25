import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
import { RouterProvider} from 'react-router-dom';
import { FilmsProvider } from './components/Films-context/index.jsx';
import { FilterProvider } from './components/Filter-context/index.jsx';
import { router } from './routers/route.js';
import { store } from './store/store.js';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilmsProvider>
      <FilterProvider>
        <Provider store={store}>
          <RouterProvider router={router}/>
        </Provider>
      </FilterProvider>
    </FilmsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
