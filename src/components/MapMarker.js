import React from 'react';
import City from './icons/city.svg';

const MapMarker = ({x, y, type}) => {
  var typeComponent
  switch (type) {
    case 'city':
      typeComponent = <City/>;
      break;
  }

  return (
    <div className='marker' style={{ top: y, left: x }}>
      {typeComponent}
    </div>
  )
}
  
export default MapMarker;