import React from 'react';

import Article from '../../components/Article';
import Map from '../../components/Map';
import MapMarker from '../../components/MapMarker';

import Maps from '../../Maps';

export const Component = () => {
  return (
    <Article title='Safe Haven' content={ import('./231.14.01 - Safe Haven.md') }>
      <Map
        source={Maps.FATES_END}
        initialScale={0.5}
        minScale={0.1}
        maxScale={3}
      >
        <MapMarker x='2058px' y='1429px' type='city'/>
      </Map>
    </Article>
  )
}
