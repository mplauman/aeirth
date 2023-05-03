import React from 'react';
import FatesEnd from '../maps/FatesEnd';
import InformationDrawer from '../components/InformationDrawer';

const Welcome = () => {
  return (
    <>
      <FatesEnd/>
      <InformationDrawer>
        <p>An introduction to the overall campaign or something.</p>
      </InformationDrawer>
    </>
  )
}

export default Welcome;