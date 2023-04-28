import React from 'react';

import TableOfContents from './TableOfContents';

const App = ({children}) => {
  return (
    <>
      <div style={{ position: 'absolute', top:'0px', left: '0px', width: '100vw', height: '100vh'}}>
        {children.map}
      </div>
      <TableOfContents>
        {children.articles}
      </TableOfContents>
    </>
  )
}

export default App;