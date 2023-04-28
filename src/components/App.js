import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

import CloseIcon from '../assets/icons/close.svg';
import MenuIcon from '../assets/icons/menu.svg';

const TableOfContents = ({children}) => {
  const [open, setOpen] = useState(null)

  var icon
  if (open) {
    icon = <CloseIcon style={{ width: '100%', height: '100%' }}/>
  } else {
    icon = <MenuIcon style={{ width: '100%', height: '100%' }}/>
  }

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
      <animated.div style={{ width: props.width, position: 'absolute', top: '0px', left: '0px', height: '100vh', backgroundColor: '#EBEBEB' }}>
        <div style={{ position: 'relative', top: '60px', width: '100%', height: 'calc(100vh - 60px)', overflowY: 'scroll' }}>
          <ul>
            {children}
          </ul>
        </div>
      </animated.div>
      <div onClick={toggleOpen} style={{ position: 'absolute', top: '10px', left: '10px', width: '50px', height: '50px' }}>
        {icon}
      </div>
    </>
  )
}

const Article = ({title}) => {
  return (
    <li>{title}</li>
  )
}

const Category = ({title, children}) => {
  return (
    <>
      <li>{title}</li>
      <ul>{children}</ul>
    </>
  )
}

const App = ({children}) => {
  return (
    <>
      <div style={{ position: 'absolute', top:'0px', left: '0px', width: '100vw', height: '100vh'}}>
        {children.map}
      </div>
      <TableOfContents>
        <Article title='An article'/>
        <Article title='Another article'/>
        <Category title='Bestiary'>
          <Article title='Weiner dog'/>
        </Category>
      </TableOfContents>
    </>
  )
}

export default App;