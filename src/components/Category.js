import React from 'react';

const Category = ({title, children}) => {
  return (
    <li className='category'>{title}
      <ul>{children}</ul>
    </li>
  )
}

export default Category;