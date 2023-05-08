import React from 'react';

import Article from '../components/Article';
import Map from '../components/Map';

export const Component = () => {
  return (
    <Article title='Welcome' content={import ('../assets/markdown/Welcome.md') }>
      <Map
        name="Hinterlands of Fate's End"
        image={import('../assets/maps/fatesEnd.jpg')}
        initialScale={0.5}
        minScale={0.1}
        maxScale={3}
      >
      </Map>
    </Article>
  )
}
