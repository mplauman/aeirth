import React from 'react';

import Article from './Article';
import Map from './Map';
import TableOfContents from './TableOfContents';

import {
  createHashRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const buildRoutes = (context, tocEntries) => {
  const routes = tocEntries.flatMap( (tocEntry) => {
    if (tocEntry.children != null) {
      return buildRoutes(context, tocEntry.children)
    }
    
    if (tocEntry.article == null) {
      return []
    }

    if (tocEntry.map != null) {
      return [
        {
          path: tocEntry.article.path.substr(1),
          element:
            <>
              <Map {...tocEntry.map}/>
              <Article context={context} tocEntry={tocEntry}/>
            </>
        }
      ]
    }

    return [
      {
        path: tocEntry.article.path.substr(1),
        element:
          <Article context={context} tocEntry={tocEntry}/>
      }
    ]
  });

  const initial = {
    path: "/",
    element: routes[0].element
  }

  routes.unshift(initial)

  return routes
};

const App = ({context, tocEntries}) => {
  return (
    <RouterProvider
      router={
        createHashRouter([
          {
            "path": "/",
            element: <>
              <div className='mainView'>
                <Outlet/>
              </div>
              <TableOfContents>{tocEntries}</TableOfContents>
            </>,
            children: buildRoutes(context, tocEntries),
          }
        ])
      }
    />
  )
}

export default App;