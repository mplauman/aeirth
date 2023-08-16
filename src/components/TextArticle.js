import React from 'react';

import { useLoaderData } from 'react-router-dom';

import Markdown from './Markdown'

const TextArticle = ({campaign}) => {
  const entry = useLoaderData()

  return (
    <div className='informationDrawer'>
      <div className='toolbar'>
        <div className='title'>{entry.display}</div>
      </div>
      <Markdown campaign={campaign} content={entry.content}/>
    </div>
  )
}

export default TextArticle;
