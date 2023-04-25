import React from 'react';
import { KeepScale } from 'react-zoom-pan-pinch';
import City from '../assets/markers/city.svg';

const MapMarker = ({x, y, type}) => {
  var typeComponent
  switch (type) {
    case 'city':
      typeComponent = <City/>;
      break;
  }

  return (
    <div className='marker' style={{ top: y, left: x }}>
      <KeepScale>{typeComponent}</KeepScale>
    </div>
  )
}
  
export default MapMarker;