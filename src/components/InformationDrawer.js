import React, { useState } from 'react';

import Minimize from './icons/mini-chevron-down.svg';
import Maximize from './icons/mini-chevron-up.svg';

import Drawer from '@mui/material/Drawer';

const InformationDrawer = ({title, children}) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Drawer className='informationDrawer'
          sx={{ flexShrink: 0 }}
          variant="persistent"
          anchor="bottom"
          open={open}
      >
        <div className='toolbar' onClick={() => setOpen(!open) }>
          <div className='title'>{title}</div>
          <div className='icon'>
            {open ? <Minimize/> : <Maximize/>}
          </div>
        </div>
        {children}
      </Drawer>
      { open ? '' : <div className='reopen' onClick={() => setOpen(true)}><Maximize/></div> }
    </>
  )
}

export default InformationDrawer;