import React from 'react';

import Article from '../components/Article';
import Map from '../components/Map';
import MapMarker from '../components/MapMarker';

export const Component = () => {
  return (
    <Article title='Gods of Aeirth' content={ import('../assets/markdown/Gods of Aeirth.md') }>
      <Map
        name="Hinterlands of Fate's End"
        image={import('../assets/maps/fatesEnd.jpg')}
        initialScale={0.5}
        minScale={0.1}
        maxScale={3}
      >
        <MapMarker x='2058px' y='1429px' type='city'/>
      </Map>
    </Article>
  )
}
