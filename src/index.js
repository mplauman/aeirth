import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider, Link } from 'react-router-dom';

import App from './components/App';
import Article from './components/Article';
import Category from './components/Category';

import './style.css';
import GodsOfAeirth from './articles/GodsOfAeirth';
import Welcome from './articles/Welcome';

const router = createHashRouter([
  {
    path: "/",
    element:
      <App>
        <li><Link to={''}>Welcome</Link></li>
        <li><Link to={'godsOfAeirth'}>Gods of Aeirth</Link></li>
        <Article title='Another article'/>
        <Category title='Bestiary'>
          <Article title='Weiner dog'/>
        </Category>
      </App>,
    children: [
      { 
        index: true,
        element: <Welcome/>
      },
      {
        path: "godsOfAeirth",
        element: <GodsOfAeirth/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
