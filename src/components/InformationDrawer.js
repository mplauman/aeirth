import React, { useState } from 'react';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Global } from '@emotion/react';

import Minimize from './icons/mini-chevron-down.svg';
import Maximize from './icons/mini-chevron-up.svg';

const drawerBleeding = 56;

const Puller = styled(Box)(() => ({
  width: 30,
  height: 6,
  backgroundColor:  '#888',
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const InformationDrawer = ({title, children}) => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  if (matches) {
    var button = <Maximize/>
    if (open) {
      button = <Minimize/>
    }
    
    return (
      <>
        <Global styles={{'.informationDrawer.MuiDrawer-root > .MuiPaper-root': { height: `calc(50% - ${drawerBleeding}px)`, overflow: 'visible'} }}/>
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
        <Box sx={{position: 'absolute', top: -drawerBleeding, visibility: 'visible', right: 0, left: 0, height: 'calc(100% + 56px)', overflow: 'visible' }}>
          <Paper style={{height: '100%'}}>
            <div className='title_sep'/>
            <div className='content'>
              <div className='toolbar' onClick={() => setOpen(!open) }>
                <div className='title'><h1>{title}</h1></div>
                <div className='icon'>{button}</div>
              </div>
              {children}
            </div>
          </Paper>
        </Box>
      </Drawer>
    </>
    )
  } else {
    return (
      <>
        <Global styles={{'.informationDrawer.MuiDrawer-root > .MuiPaper-root': { height: `calc(50% - ${drawerBleeding}px)`, overflow: 'visible'} }}/>
        <SwipeableDrawer className="informationDrawer phb" anchor='bottom' open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} swipeAreaWidth={drawerBleeding} disableSwipeToOpen={false}>
          <Box sx={{position: 'absolute', top: -drawerBleeding, visibility: 'visible', right: 0, left: 0, height: 'calc(100% + 56px)', overflow: 'auto' }}>
            <Paper style={{height: '100%'}}>
              <Puller/>
              <div className='title_sep'/>
              <div className='content'>
                <h1 style={{display: 'flex', paddingTop: '6px', alignItems: 'center', justifyContent: 'center'}}>{title}</h1>
                {children}
              </div>
            </Paper>
          </Box>
        </SwipeableDrawer>
      </>
    )
  }
}

export default InformationDrawer;