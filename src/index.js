import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App';
import ArticleLink from './components/ArticleLink';
import Category from './components/Category';

import './style.css';

import FatesEnd from './maps/FatesEnd';

const directory = [
  {
    title: 'Welcome',
    load: () => { return import('./articles/Welcome') }
  },
  {
    title: 'The Gods',
    load: () => { return import('./articles/GodsOfAeirth') }
  },
  {
    title: 'Bestiary',
    children: [
      {
        title: 'Weiner Dog',
        load: () => { return import('./articles/WeinerDog') }
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

    return <ArticleLink key={itemPath} path={itemPath} title={item.title}/>
  });
};

const buildRoutes = (path, d) => {
  return d.flatMap( (item) => {
    const itemPath = path + "/" + item.title;

    if (item.children != null) {
      return buildRoutes(itemPath, item.children);
    }

    return {
      path: itemPath,
      async lazy() {
        return await item.load()
          .then( (result) => { return result.default })
          .then( (component) => { return { Component: component }});
      }
    };
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
