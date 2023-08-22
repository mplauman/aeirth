import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';

import TextArticle from './TextArticle';
import MapArticle from './MapArticle';

import CloseIcon from './icons/close.svg';
import MenuIcon from './icons/menu.svg';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "url(https://www.dndbeyond.com/content/1-0-2557-0/skins/waterdeep/images/mon-summary/stat-block-top-texture.png), url(https://www.dndbeyond.com/content/1-0-2557-0/skins/waterdeep/images/mon-summary/paper-texture.png)",
          backgroundRepeat: "repeat-x, repeat",
        }
      }
    }
  }
});

const Layout = ({children}) => {
  const [tocOpen, setTocOpen] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      {/* The main window where the map and whatnot gets displayed */}
      <Paper className='mainView'>
        <Outlet/>
      </Paper>

      {/* A button used to open and close the table of contents */}
      <div className='tableOfContentsButton' onClick={() => setTocOpen(!tocOpen)} >
        {tocOpen ? <CloseIcon/> : <MenuIcon/>}
      </div>

      {/* The table of contents drawer */}
      <Drawer anchor='left' open={tocOpen} onClose={() => setTocOpen(false)}>
        <Box sx={{ width: 'auto' }} role='presentation' onClick={() => setTocOpen(false)} onKeyDown={() => setTocOpen(false)}>
          <div className='phb toc text_padding'>
          {children}
          </div>
        </Box>
      </Drawer>
    </ThemeProvider>
  )
}

/**
 * Convert an array of article entries into a <nav>. Each entry can be either
 * a string or an object.
 * 
 * Each entry in the array gets converted 
 * 
 * If the entry is an object:
 * - If the 
 */
const buildNavBar = (campaign, tableOfContents) => {
  return (
    <ul>
      {tableOfContents.map((entry, idx) => {
        if (typeof entry === 'string') {
          const found = campaign.findEntry(entry)
          const text = found ? found.display : entry
          const element = found ? <Link to={'/' + entry}>{text}</Link> : text

          return <li key={idx}>{element}</li>
        }

        if (typeof entry === 'object') {
          if (!entry.display && !entry.content) {
            throw new TypeError('Missing display and/or content property')
          }

          const found = campaign.findEntry(entry.content)
          const text = entry.display || (found ? found.display : entry.content)
          const element = found ? <Link to={'/' + entry.content}>{text}</Link> : text

          if (entry.entries) {
            return <li key={idx}><h3>{element}</h3>{buildNavBar(campaign, entry.entries)}</li>
          }

          return <li key={idx}>{element}</li>
        }

        throw new TypeError('' + entry + ' must be a string or object')
      })}
    </ul>
  )
}

const loadArticle = (campaign, params) => {
  const article = campaign.getArticle(params.id)

  return {
    title: article.display,
    content: article.content,
    campaign: campaign,
  }
}

const loadEvent = (campaign, params) => {
  const event = campaign.getEvent(params.id)
  const location = campaign.getLocation(event.location)
  const map = campaign.getMap(location.map)

  return {
    map: {
      x: location.x,
      y: location.y,
      initialScale: map.initialScale,
      minScale: map.minScale,
      maxScale: map.maxScale,
      title: map.display,
      image: map.content,
      markers: map.locations.map((l) => campaign.getLocation(l)).concat(location),
    },
    title: event.display,
    content: event.content,
    campaign: campaign,
  }
}

const loadLocation = (campaign, params) => {
  const location = campaign.getLocation(params.id)
  const map = campaign.getMap([location.map])

  return {
    map: {
      x: location.x,
      y: location.y,
      initialScale: map.initialScale,
      minScale: map.minScale,
      maxScale: map.maxScale,
      title: map.display,
      image: map.content,
      markers: map.locations.map((l) => campaign.getLocation(l)).concat(location),
    },
    title: location.display,
    content: location.content,
    campaign: campaign,
  }
}

const CampaignWiki = ({campaign, children}) => {
  // Using a hash router here because there's no server to speak to, making it impossible to forward all
  // paths to a single endpoint. Hash routing puts all the logic into the page itself so that stuff like
  // bookmarks and whatnot will work. 
  const router = createHashRouter([
    {
      path: '/',
      element: <Layout>{buildNavBar(campaign, children)}</Layout>,
      children: [
        {
          path: 'articles/:id',
          element: <TextArticle/>,
          loader: ({params}) => loadArticle(campaign, params),
        },
        {
          path: 'events/:id',
          element: <MapArticle/>,
          loader: ({params}) => loadEvent(campaign, params),
        },
        {
          path: 'locations/:id',
          element: <MapArticle/>,
          loader: ({params}) => loadLocation(campaign, params),
        },
      ],
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default CampaignWiki;