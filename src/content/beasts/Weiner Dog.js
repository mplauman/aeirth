import React from 'react';

import Article from '../../components/Article';
import Map from '../../components/Map';

export const Component = () => {
  return (
    <Article title='Weiner Dog' content={ import('./Weiner Dog.md') }>
      <Map
        name="Hinterlands of Fate's End"
        image={import('../fatesEnd.jpg')}
        initialScale={0.5}
        minScale={0.1}
        maxScale={3}
      />
    </Article>
  )
}