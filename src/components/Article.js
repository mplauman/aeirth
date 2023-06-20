import React, { useState, useEffect } from 'react';
import InformationDrawer from './InformationDrawer';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import wikiLinkPlugin from 'remark-wiki-link';

const Article = ({title, content}) => {
  return (
    <InformationDrawer title={title}>
      <ReactMarkdown
        children={content}
        remarkPlugins={[
          remarkGfm,
          wikiLinkPlugin,
        ]}
      />
    </InformationDrawer>
  )
}

export default Article;
