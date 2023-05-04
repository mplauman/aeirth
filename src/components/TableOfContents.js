import React, { useState } from 'react';

import { animated, useSpring } from '@react-spring/web';

import CloseIcon from '../assets/icons/close.svg';
import MenuIcon from '../assets/icons/menu.svg';

const TableOfContents = ({children}) => {
  const [open, setOpen] = useState(null)

  var props;
  if (open == null) {
    props = useSpring({
      from: { width: 0 },
      to: { width: 0 }
    })
  }
  else {
    props = useSpring({
      from: { width: open ? '0%' : '15%' },
      to: { width: open ? '15%' : '0%' }
    });
  }

  const toggleOpen = () => {
    setOpen(open == null || !open);
  }

  return (
    <>
      <animated.div className='tableOfContents' style={{width: props.width}}>
        <div>
          <ul>
            {children}
          </ul>
        </div>
      </animated.div>
      <div onClick={toggleOpen} className='tableOfContentsButton'>
        {open ? <CloseIcon/> : <MenuIcon/>}
      </div>
    </>
  )
}

export default TableOfContents;