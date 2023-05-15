import React from 'react';

import Article from '../../components/Article';
import Map from '../../components/Map';

import Maps from '../../Maps';

export const Component = () => {
  return (
    <Article title='Romin' content={ import('./Romin.md') }>
      <Map
        source={Maps.FATES_END}
        initialScale={0.5}
        minScale={0.1}
        maxScale={3}
      />
    </Article>
  )
}
