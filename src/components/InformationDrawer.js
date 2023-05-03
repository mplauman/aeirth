import React, { useState } from 'react';

import Minimize from '../assets/icons/mini-chevron-down.svg';
import Maximize from '../assets/icons/mini-chevron-up.svg';

import { animated, useSpring } from '@react-spring/web';

const OPENED = { top: 'calc(80% - 25px)', height: 'calc(20% + 25px)' }
const CLOSED = { top: 'calc(100% - 25px)', height: 'calc(0% + 25px)' }

const InformationDrawer = ({title, children}) => {
  const [closed, setClosed] = useState(null);

  var props;
  if (closed == null) {
    props = useSpring({from: OPENED, to: OPENED});
  }
  else if (closed) {
    props = useSpring({from: OPENED, to: CLOSED});
  }
  else {
    props = useSpring({from: CLOSED, to: OPENED});
  }

  const toggleOpen = () => {
    setClosed(closed == null || !closed);
  }

  return (
    <animated.div className='informationDrawer' style={props}>
      <div className='toolbar' onClick={toggleOpen}>
        <div className='title'>{title}</div>
        <div className='icon'>
          {(closed == null || !closed) ? <Minimize/> : <Maximize/>}
        </div>
      </div>
      <div className='content'>
        {children}
      </div>
    </animated.div>
  )
}

export default InformationDrawer;