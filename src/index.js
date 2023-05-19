import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App';
import Article from './components/Article';
import ArticleLink from './components/ArticleLink';
import Category from './components/Category';
import Map from './components/Map';
import MapMarker from './components/MapMarker';

import './style.css';

import Directory from './Directory';

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
        const component = () => {
          return (
            <Article title={item.title} content={item.content}>
              <Map
                source={item.map}
                initialScale={item.initialScale}
                minScale={item.minScale}
                maxScale={item.maxScale}
              >
                {
                  (item.markers || []).map((marker, index) => {
                    <MapMarker id={index} x={marker.x} y={marker.y} type={marker.type}/>
                  })
                }
              </Map>
            </Article>
          );
        };

        return { Component: component }
      }
    };
  })
};

const router = createBrowserRouter([
  {
    path: '',
    element: <App>{ buildNavItems('', Directory) }</App>,
    children: [
      { 
        index: true,
        element: <></>
      },
    ].concat(buildRoutes('', Directory))
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
