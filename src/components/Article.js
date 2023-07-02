import React, { useState, useEffect } from 'react';
import InformationDrawer from './InformationDrawer';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import wikiLinkPlugin from 'remark-wiki-link';
import { Link } from 'react-router-dom';

const Article = ({context, tocEntry}) => {
  const [content, setContent] = useState("Loading...")

  useEffect(() => {
    const loadContent = async () => {
      const contentPath = context(tocEntry.article.path);
      const contentData = await fetch(contentPath);
      
      setContent(await contentData.text())
    }

    loadContent()
  })

  const findPath = (wikiLink) => {
    wikiLink += ".md"

    const entries = [...context.keys()]
    const matches = []
    
    while (entries.length > 0) {
      const entry = entries.shift()
  
      const wikiForm = entry.toLowerCase().replaceAll(' ', '_')
      if (wikiForm.endsWith(wikiLink)) {
        matches.push(entry)
      }
    }
  
    if (matches.length == 1) {
      return matches[0]
    }
  
    return matches.find( (candidate) => {
      return candidate.toLowerCase().replaceAll(' ', '_') == './' + wikiLink;
    })
  }

  return (
    <InformationDrawer title={tocEntry.title}>
      <ReactMarkdown
        children={content}
        remarkPlugins={[
          remarkGfm,
          wikiLinkPlugin,
        ]}
        components={{
          a: (node) => {
            // Not an internal wiki link, just go straight to it.
            if (node.className == null) {
              return <a className='articleLink' href={node.href} target='_blank'>{node.children}</a>
            }

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

            var path = findPath(hrefText)
            if (path != null) {
              path = path.substr(1)
            }

            return <Link to={path}>{linkText}</Link>
          }
        }}
      />
    </InformationDrawer>
  )
}

export default Article;
