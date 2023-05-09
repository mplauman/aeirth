import React from 'react';

const Category = ({title, children}) => {
  return (
    <li>{title}
      <ul>{children}</ul>
    </li>
  )
}

export default Category;