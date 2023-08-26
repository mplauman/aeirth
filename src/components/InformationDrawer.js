import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';

import { Global } from '@emotion/react';

import Minimize from './icons/mini-chevron-down.svg';
import Maximize from './icons/mini-chevron-up.svg';

const drawerBleeding = 56;
const bleedingStyle = {
  '.informationDrawer.MuiDrawer-root > .MuiPaper-root': {
    height: `calc(50% - 56px)`,
    overflow: 'visible',
  }
}

const InformationDrawer = ({title, children}) => {
  const [open, setOpen] = useState(false);

  var button = <Maximize/>
  if (open) {
    button = <Minimize/>
  }
  
  return (
    <>
      <Global styles={bleedingStyle}/>
      <Drawer className='informationDrawer phb'
        sx={{ flexShrink: 0 }}
        variant="temporary"
        anchor="bottom"
        onClose={() => setOpen(false)}
        open={open}
        ModalProps={{
          keepMounted: true,
        }}
    >
      <Box sx={{position: 'absolute', top: -drawerBleeding, visibility: 'visible', right: 0, left: 0, height: 'calc(100% + 56px)', overflow: 'hidden' }}>
        <Paper style={{height: '100%', overflow: 'visible'}}>
          <div className='title_sep'/>
          <div className='toolbar' onClick={() => setOpen(!open) }>
            <div className='title'><h1 className='title'>{title}</h1></div>
            <div className='icon'>{button}</div>
          </div>
          <div className='content'>
            {children}
          </div>
        </Paper>
      </Box>
    </Drawer>
  </>
  )
}

export default InformationDrawer;