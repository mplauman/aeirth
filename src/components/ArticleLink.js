import React from 'react';
import { Link } from 'react-router-dom';

const ArticleLink = ({tocEntry}) => {
  return (
    <li className='articleLink'><Link to={tocEntry.article.path}>{tocEntry.title}</Link></li>
  )
}

export default ArticleLink;
