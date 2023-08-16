import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom';

import remarkGfm from 'remark-gfm'
import wikiLinkPlugin from 'remark-wiki-link';
 
const resolveLink = (campaign, node) => {
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

  var path = '/' + campaign.resolveWikiLink(hrefText)
 
  return <Link to={path}>{linkText}</Link>
}

const Markdown = ({campaign, content}) => {
  const [markdown, setMarkdown] = useState("Loading...")

  useEffect(() => {
    campaign
      .loadContent(content)
      .then((loaded) => setMarkdown(loaded))
  })

  return (
    <ReactMarkdown
      children={markdown}
      remarkPlugins={[
        remarkGfm,
        wikiLinkPlugin,
      ]}
      components={{
        a: (node) => resolveLink(campaign, node)
      }}
    />
  )
}

export default Markdown;
