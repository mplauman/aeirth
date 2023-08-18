import React from 'react';

import { useLoaderData } from 'react-router-dom';

import Markdown from './Markdown'

const TextArticle = () => {
  const data = useLoaderData()

  return (
    <div className='informationDrawer'>
      <div className='toolbar'>
        <div className='title'>{data.title}</div>
      </div>
      <Markdown campaign={data.campaign} content={data.content}/>
    </div>
  )
}

export default TextArticle;
