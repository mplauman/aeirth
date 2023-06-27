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
      return <Category key={itemPath} title={tocEntry.title}>{ buildTableOfContents(itemPath, tocEntry.children, setCurrentArticle) }</Category>;
    }

    const clickHandler = () => {
      setCurrentArticle(tocEntry)
      return false
    }

    return <ArticleLink key={itemPath} onClick={clickHandler} title={tocEntry.title}/>
  });
};

const findTocEntry = (target, toc) => {
  const entries = [...toc]
  const matches = []
  const targetFile = target + '.md'

  while (entries.length > 0) {
    const entry = entries.shift()

    if (entry.children) {
      entries.push(...entry.children)
      continue
    }

    const wikiForm = entry.article.path.toLowerCase().replaceAll(' ', '_')
    if (wikiForm.endsWith(targetFile)) {
      matches.push(entry)
    }
  }

  if (matches.length == 1) {
    return matches[0]
  }

  return matches.find( (candidate) => {
    console.log(candidate.article.path)
    return candidate.article.path.toLowerCase().replaceAll(' ', '_') == './' + targetFile;
  })
 }

const App = ({context, tocEntries}) => {
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
      const articlePath = context(newState.article.path);
      const articleData = await fetch(articlePath);
      newState.article.content = await articleData.text();
    }

    setState(newState);
  }

  // on click: find the TOC entry that shares a heading with the article
  const handleLinkClick = async (href) => {
    const found = findTocEntry(href, tocEntries)
    if (found) {
      setCurrentArticle(found)
    }
  }

  const tableOfContents = buildTableOfContents('', tocEntries, setCurrentArticle);

  var mainView = <></>
  if (state.map != null && state.article != null) {
    mainView = 
      <MainView>
        <Map {...state.map}/>
        <Article {...state.article} handleLinkClick={handleLinkClick}/>
      </MainView>
  } else if (state.map != null) {
    mainView = 
      <MainView>
        <Map {...state.map}/>
      </MainView>
  } else if (state.article != null) {
    mainView =
      <MainView>
        <Article {...state.article} handleLinkClick={handleLinkClick}/>
      </MainView>
  }

  return (
    <>
      {mainView}
      <TableOfContents open={state.showNavigation}>{ tableOfContents }</TableOfContents>
    </>
  )
}

export default App;