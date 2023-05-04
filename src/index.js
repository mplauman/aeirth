import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App';
import Article from './components/Article';
import Category from './components/Category';

import './style.css';

import FatesEnd from './maps/FatesEnd';
import GodsOfAeirth from './articles/GodsOfAeirth';
import Welcome from './articles/Welcome';
import WeinerDog from './articles/WeinerDog';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <App>
        <Article path='welcome' title='Welcome'/>
        <Article path='godsOfAeirth' title='The Gods'/>
        <Category title='Bestiary'>
          <Article path='beasts/weinerDog' title='Weiner dog'/>
        </Category>
      </App>,
    children: [
      { 
        index: true,
        element: <FatesEnd/>
      },
      {
        path: "welcome",
        element: <Welcome/>
      },
      {
        path: "godsOfAeirth",
        element: <GodsOfAeirth/>
      },
      {
        path: "beasts/weinerDog",
        element: <WeinerDog/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
