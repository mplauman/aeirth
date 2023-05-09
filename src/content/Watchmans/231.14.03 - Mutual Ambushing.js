import React from 'react';

import Article from '../../components/Article';
import Map from '../../components/Map';
import MapMarker from '../../components/MapMarker';

export const Component = () => {
  return (
    <Article title='Mutual Ambushing' content={ import('./231.14.03 - Mutual Ambushing.md') }>
      <Map
        name="Hinterlands of Fate's End"
        image={import('../fatesEnd.jpg')}
        initialScale={0.5}
        minScale={0.1}
        maxScale={3}
      >
        <MapMarker x='2058px' y='1429px' type='city'/>
      </Map>
    </Article>
  )
}