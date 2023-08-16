import React, { useState, useEffect } from 'react';

import { useLoaderData } from 'react-router-dom';

import Markdown from './Markdown'

const TextArticle = ({campaign}) => {
  const [content, setContent] = useState("Loading...")
  const entry = useLoaderData()

  useEffect(() => {
    campaign
      .loadContent(entry.content)
      .then((content) => setContent(content))
  })

  return (
    <div className='informationDrawer'>
      <div className='toolbar'>
        <div className='title'>{entry.display}</div>
      </div>
      <Markdown campaign={campaign} content={content}/>
    </div>
  )
}

export default TextArticle;
