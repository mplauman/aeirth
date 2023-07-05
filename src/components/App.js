import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Article from './Article';
import ArticleLink from './ArticleLink';
import Category from './Category';
import Map from './Map';
import CloseIcon from './icons/close.svg';
import MenuIcon from './icons/menu.svg';

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


const buildNavigation = (tocEntries) => {
  return tocEntries.map( (tocEntry, index) => {
    if (tocEntry.children != null) {
      return <Category key={index} tocEntry={tocEntry}>{ buildNavigation(tocEntry.children) }</Category>;
    }

    return <ArticleLink key={index} tocEntry={tocEntry}/>
  });
};

const App = ({context, tocEntries}) => {
  const [tocOpen, setTocOpen] = useState(false)

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
              <Drawer anchor='left' open={tocOpen} onClose={() => setTocOpen(false)}>
                <Box className='tableOfContents' sx={{ width: 'auto', overflowY: 'scroll' }} role='presentation' onClick={() => setTocOpen(false)} onKeyDown={() => setTocOpen(false)}>
                  <ul>
                    { buildNavigation(tocEntries) }
                  </ul>
                </Box>
              </Drawer>
              <div onClick={() => setTocOpen(!tocOpen)} className='tableOfContentsButton'>
                {tocOpen ? <CloseIcon/> : <MenuIcon/>}
              </div>
            </>,
            children: buildRoutes(context, tocEntries),
          }
        ])
      }
    />
  )
}

export default App;