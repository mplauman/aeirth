import React from 'react';

import MainView from './MainView';
import TableOfContents from './TableOfContents';

const App = ({children}) => {
  return (
    <>
      <MainView>
        {children.map}
      </MainView>
      <TableOfContents>
        {children.articles}
      </TableOfContents>
    </>
  )
}

export default App;