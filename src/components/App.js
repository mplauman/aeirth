import React, {useState} from 'react';

import Article from './Article';
import ArticleLink from './ArticleLink';
import Category from './Category';
import MainView from './MainView';
import Map from './Map';
import TableOfContents from './TableOfContents';

const buildTableOfContents = (path, tocEntry, setCurrentArticle) => {
  return tocEntry.map( (tocEntry) => {
    const itemPath = path + "/" + tocEntry.title;

    if (tocEntry.children != null) {
      return <Category key={itemPath} path={itemPath} title={tocEntry.title}>{ buildTableOfContents(itemPath, tocEntry.children, setCurrentArticle) }</Category>;
    }

    const clickHandler = () => {
      setCurrentArticle(tocEntry)
      return false
    }

    return <ArticleLink key={itemPath} onClick={clickHandler} title={tocEntry.title}/>
  });
};


const App = ({tocEntries}) => {
  // Initial state:
  // - article closed
  // - article content empty
  // - navbar closed
  // - fate's end map, centered on mog caern
  const [state, setState] = useState({
    title: null,
    map: null,
    article: null,    
  });

  const setCurrentArticle = async (item) => {
    const newState = {
      ...state,
      ...item,
    };

    if (newState.article != null) {
      const articleModule = await newState.article.module;
      const articleData = await fetch(articleModule.default);
      newState.article.content = await articleData.text();
    }

    setState(newState);
  }

  const tableOfContents = buildTableOfContents('', tocEntries, setCurrentArticle);

  var mainView = null;
  if (state.map != null && state.article != null) {
    mainView = 
      <MainView>
        <Map {...state.map}>
          {
            state.map.markers.map((marker, index) => {
              return <MapMarker key={index} {...marker}/>
            })
          }
        </Map>
        <Article {...state.article}/>
      </MainView>
  } else if (state.map != null) {
    mainView = 
      <MainView>
        <Map {...state.map}>
          {
            state.map.markers.map((marker, index) => {
              return <MapMarker key={index} {...marker}/>
            })
          }
        </Map>
      </MainView>
  } else if (state.article != null) {
    mainView =
      <MainView>
        <Article {...state.article}/>
      </MainView>
  } else {
    mainView = <></>
  }

  return (
    <>
      {mainView}
      <TableOfContents open={state.showNavigation}>{ tableOfContents }</TableOfContents>
    </>
  )
}

export default App;