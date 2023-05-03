import React from 'react';
import FatesEnd from '../maps/FatesEnd';
import InformationDrawer from '../components/InformationDrawer';

const Welcome = () => {
  return (
    <>
      <FatesEnd/>
      <InformationDrawer title='Welcome'>
        <p>Some kind of blurb.</p>
      </InformationDrawer>
    </>
  )
}

export default Welcome;