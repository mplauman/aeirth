import React from 'react';
import Map from '../components/Map';
import MapMarker from '../components/MapMarker';

const FatesEnd = () => {
  const image = import('../assets/maps/fatesEnd.jpg');

  return (
    <Map name="Hinterlands of Fate's End" asset={image} initialScale={0.5} minScale={0.1} maxScale={3}>
      <MapMarker x='2058px' y='1429px' type='city'/>
    </Map>
  )
}

export default FatesEnd;