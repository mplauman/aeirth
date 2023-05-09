import React from 'react';
import { Outlet } from 'react-router-dom';

import TableOfContents from './TableOfContents';
import MainView from './MainView';

const App = ({children}) => {
  return (
    <>
      <MainView>
        <Outlet/>
      </MainView>
      <TableOfContents>
        {children}
      </TableOfContents>
    </>
  )
}

export default App;