import React, { useState, useEffect } from 'react';
import InformationDrawer from './InformationDrawer';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Article = ({title, content}) => {
  return (
    <InformationDrawer title={title}>
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]}/>
    </InformationDrawer>
  )
}

export default Article;
