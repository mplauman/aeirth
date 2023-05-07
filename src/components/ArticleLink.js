import React from 'react';
import { Link } from 'react-router-dom';

const ArticleLink = ({path, title}) => {
  return (
    <li><Link to={path}>{title}</Link></li>
  )
}

export default ArticleLink;
