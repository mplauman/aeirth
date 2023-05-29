import React from 'react';

const ArticleLink = ({onClick, title}) => {
  return (
    <li className='articleLink'><a onClick={onClick}>{title}</a></li>
  )
}

export default ArticleLink;
