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

const directory = [
  {
    title: 'Welcome',
    element: <Welcome/>
  },
  {
    title: 'The Gods',
    element: <GodsOfAeirth/>
  },
  {
    title: 'Bestiary',
    children: [
      {
        title: 'Weiner Dog',
        element: <WeinerDog/>
      },
    ],
  },
];

const buildNavItems = (path, d) => {
  return d.map( (item) => {
    const itemPath = path + "/" + item.title;

    if (item.children != null) {
      return <Category key={itemPath} path={itemPath} title={item.title}>{ buildNavItems(itemPath, item.children) }</Category>;
    }

    return <Article key={itemPath} path={itemPath} title={item.title}/>
  });
};

const buildRoutes = (path, d) => {
  return d.flatMap( (item) => {
    const itemPath = path + "/" + item.title;

    if (item.children != null) {
      return buildRoutes(itemPath, item.children);
    }

    return { path: itemPath, element: item.element };
  })
};

const router = createBrowserRouter([
  {
    path: '',
    element: <App>{ buildNavItems('', directory) }</App>,
    children: [
      { 
        index: true,
        element: <FatesEnd/>
      },
    ].concat(buildRoutes('', directory))
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
