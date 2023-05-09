import React, { useState, useEffect } from 'react';
import InformationDrawer from './InformationDrawer';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Article = ({title, content, children}) => {
  const [markdown, setMarkdown] = useState('Loading...');

  useEffect(
    () => {
      const loadContent = async () => {
        content
          .then( (module) => { return fetch(module.default) })
          .then( (content) => { return content.text() })
          .then( (markdown) => { setMarkdown(markdown) })
      }

      loadContent()
    },
    [markdown]
  )

  return (
    <>
      {children}
      <InformationDrawer title={title}>
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>
      </InformationDrawer>
    </>
  )
}

export default Article;
