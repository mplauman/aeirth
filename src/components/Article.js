import React, { useState, useEffect } from 'react';
import InformationDrawer from './InformationDrawer';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import wikiLinkPlugin from 'remark-wiki-link';

const Article = ({title, content, handleLinkClick}) => {
  return (
    <InformationDrawer title={title}>
      <ReactMarkdown
        children={content}
        remarkPlugins={[
          remarkGfm,
          wikiLinkPlugin,
        ]}
        components={{
          a: (node) => {
            if (node.className) {
              const text = node.children[0]
              const textSplit = text.split('|')

              var linkText = text
              if (textSplit.length > 1) {
                linkText = textSplit[1]
              }

              const href = node.href.substr(7)
              const hrefSplit = href.split('|')

              var hrefText = href
              if (hrefSplit.length > 1) {
                hrefText = hrefSplit[0]
              }

              return <a className='articleLink' onClick={() => handleLinkClick(hrefText)}>{linkText}</a>
            }

            return <a className='articleLink' href={node.href} target='_blank'>{node.children}</a>
          }
        }}
      />
    </InformationDrawer>
  )
}

export default Article;
