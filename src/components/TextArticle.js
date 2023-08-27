import React from 'react';

import { useLoaderData } from 'react-router-dom';

import Markdown from './Markdown'

const TextArticle = () => {
  const data = useLoaderData()

  return (
    <div className='informationDrawer phb'>
      <div className='toolbar' style={{ position: 'fixed', top: '10px', left: '70px', display: 'flex', height: '60px', width: 'calc(100% - 70px)' }}>
        <div className='title'><h1 style={{ lineHeight: '100%' }} className='title'>{data.title}</h1></div>
      </div>
      <div style={{ position: 'fixed', top: '70px', width: 'calc(100vw - 2em)', height: 'calc(100% - 70px)'}} className='content'>
        <Markdown campaign={data.campaign} content={data.content}/>
      </div>
    </div>
  )
}

export default TextArticle;
