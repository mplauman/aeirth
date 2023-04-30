import React from 'react';

import Article from './Article';
import Category from './Category';
import InformationDrawer from './InformationDrawer';
import MainView from './MainView';
import TableOfContents from './TableOfContents';

import FatesEnd from '../maps/FatesEnd';
1
const App = () => {
  return (
    <>
      <MainView>
        <FatesEnd/>
      </MainView>
      <TableOfContents>
        <Article title='An article'/>
        <Article title='Another article'/>
        <Category title='Bestiary'>
          <Article title='Weiner dog'/>
        </Category>
      </TableOfContents>
      <InformationDrawer/>
    </>
  )
}

export default App;