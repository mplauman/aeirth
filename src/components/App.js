import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Article from './Article';
import Map from './Map';

import CloseIcon from './icons/close.svg';
import MenuIcon from './icons/menu.svg';

import {
  createHashRouter,
  Link,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const buildRoutes = (context, tocEntries) => {
  return tocEntries.flatMap( (tocEntry) => {
    if (tocEntry.children) {
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
              <Map key='map' {...tocEntry.map}/>
              <Article key='article' context={context} tocEntry={tocEntry}/>
            </>
        }
      ]
    }

    return [
      {
        path: tocEntry.article.path.substr(1),
        element:
          <Article key='article' context={context} tocEntry={tocEntry}/>
      }
    ]
  });
};

const buildNavigation = (tocEntries) => {
  return tocEntries.map( (tocEntry, index) => {
    if (tocEntry.children) {
      return (
        <li className='category' key={index}>{tocEntry.title}
          <ul>{ buildNavigation(tocEntry.children) }</ul>
        </li>
      )
    }

    return (
      <li className='articleLink' key={index}>
        <Link to={tocEntry.article.path}>{tocEntry.title}</Link>
      </li>
    )
  });
};

const Layout = ({tocEntries}) => {
  const [tocOpen, setTocOpen] = useState(false)

  return (
    <>
      <div style={{ zIndex: 0 }}>
        {/* The main window where the map and whatnot gets displayed */}
        <div className='mainView'>
          <Outlet/>
        </div>
      </div>

      <div style={{ zIndex: 100 }}>
        {/* A button used to open and close the table of contents */}
        <div className='tableOfContentsButton' onClick={() => setTocOpen(!tocOpen)} >
          {tocOpen ? <CloseIcon/> : <MenuIcon/>}
        </div>

        {/* The table of contents drawer */}
        <Drawer className='toc' anchor='left' open={tocOpen} onClose={() => setTocOpen(false)}>
          <Box className='tableOfContents' sx={{ width: 'auto', overflowY: 'scroll' }} role='presentation' onClick={() => setTocOpen(false)} onKeyDown={() => setTocOpen(false)}>
            <ul>{ buildNavigation(tocEntries) }</ul>
          </Box>
        </Drawer>

      </div>
    </>
  )
}

const App = ({context, tocEntries}) => {
  const routes = buildRoutes(context, tocEntries)
  const initial = {
    path: "/",
    element: routes[0].element
  }

  // Using a hash router here because there's no server to speak to, making it impossible to forward all
  // paths to a single endpoint. Hash routing puts all the logic into the page itself so that stuff like
  // bookmarks and whatnot will work. 
  const router = createHashRouter([
    {
      path: '/',
      element: <Layout tocEntries={tocEntries}/>,
      children: [initial].concat(routes),
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App;