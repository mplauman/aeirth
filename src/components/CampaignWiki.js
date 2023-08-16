import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import TextArticle from './TextArticle';
import CampaignEvent from './CampaignEvent';
import MapLocation from './MapLocation';

import CloseIcon from './icons/close.svg';
import MenuIcon from './icons/menu.svg';

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";


const Layout = ({children}) => {
  const [tocOpen, setTocOpen] = useState(false)

  return (
    <>
      {/* The main window where the map and whatnot gets displayed */}
      <div className='mainView'>
        <Outlet/>
      </div>

      {/* A button used to open and close the table of contents */}
      <div className='tableOfContentsButton' onClick={() => setTocOpen(!tocOpen)} >
        {tocOpen ? <CloseIcon/> : <MenuIcon/>}
      </div>

      {/* The table of contents drawer */}
      <Drawer anchor='left' open={tocOpen} onClose={() => setTocOpen(false)}>
        <Box sx={{ width: 'auto' }} role='presentation' onClick={() => setTocOpen(false)} onKeyDown={() => setTocOpen(false)}>
          {children}
        </Box>
      </Drawer>
    </>
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
            return <li key={idx}>{element}{buildNavBar(campaign, entry.entries)}</li>
          }

          return <li key={idx}>{element}</li>
        }

        throw new TypeError('' + entry + ' must be a string or object')
      })}
    </ul>
  )
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
          element: <TextArticle campaign={campaign}/>,
          loader: ({params}) => campaign.getArticle(params.id),
        },
        {
          path: 'events/:id',
          element: <CampaignEvent campaign={campaign}/>,
          loader: ({params}) => campaign.getEvent(params.id),
        },
        {
          path: 'locations/:id',
          element: <MapLocation campaign={campaign}/>,
          loader: ({params}) => campaign.getLocation(params.id),
        },
      ],
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default CampaignWiki;