import React from 'react';
import Pin from './icons/pin.svg';

const MapMarker = ({x, y}) => {
  return (
    <div className='marker' style={{ top: y, left: x }}><Pin/></div>
  )
}
  
export default MapMarker;