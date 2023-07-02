import React from 'react';

const Category = ({tocEntry, children}) => {
  return (
    <li className='category'>{tocEntry.title}
      <ul>{children}</ul>
    </li>
  )
}

export default Category;