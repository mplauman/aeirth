import React from 'react';

const Layout = (props) => {
  return (
    <>
      <div>
        <ToolBar/>
        <Sides/>
        <Backdrop/>
      </div>
      <main>{props.children}</main>
    </>
  )
}

export default Layout;
