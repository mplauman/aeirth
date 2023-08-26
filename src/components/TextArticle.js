import React from 'react';

import { useLoaderData } from 'react-router-dom';

import Markdown from './Markdown'

const TextArticle = () => {
  const data = useLoaderData()

  return (
    <div className='informationDrawer phb'>
      <div className='toolbar'>
        <div className='title'><h1 style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{data.title}</h1></div>
      </div>
      <div className='content'>
        <Markdown campaign={data.campaign} content={data.content}/>
      </div>
    </div>
  )
}

export default TextArticle;
