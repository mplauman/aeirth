import React from 'react';

const Category = ({title, children}) => {
  return (
    <>
      <li>{title}</li>
      <ul>{children}</ul>
    </>
  )
}

export default Category;