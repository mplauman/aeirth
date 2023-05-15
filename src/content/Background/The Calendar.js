import React from 'react';

import Article from '../../components/Article';
import Map from '../../components/Map';

import Maps from '../../Maps';

export const Component = () => {
  return (
    <Article title='Calendar of Aeirth' content={ import('./The Calendar.md') }>
      <Map
        source={Maps.FATES_END}
        initialScale={0.5}
        minScale={0.1}
        maxScale={3}
      />
    </Article>
  )
}
