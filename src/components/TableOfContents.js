import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import ArticleLink from './ArticleLink';
import Category from './Category';
import CloseIcon from './icons/close.svg';
import MenuIcon from './icons/menu.svg';

const TableOfContents = ({children}) => {
  const [open, setOpen] = useState(false)

  const buildNavigation = (tocEntries) => {
    return tocEntries.map( (tocEntry, index) => {
      if (tocEntry.children != null) {
        return <Category key={index} tocEntry={tocEntry}>{ buildNavigation(tocEntry.children) }</Category>;
      }
  
      return <ArticleLink key={index} tocEntry={tocEntry}/>
    });
  };
  
  return (
    <>
      <Drawer anchor='left' open={open == null ? false : open} onClose={() => setOpen(false)}>
        <Box className='tableOfContents' sx={{ width: 'auto', overflowY: 'scroll' }} role='presentation' onClick={() => setOpen(false)} onKeyDown={() => setOpen(false)}>
          <ul>
            { buildNavigation(children) }
          </ul>
        </Box>
      </Drawer>
      <div onClick={() => setOpen(!open)} className='tableOfContentsButton'>
        {open ? <CloseIcon/> : <MenuIcon/>}
      </div>
    </>
  )
}

export default TableOfContents;