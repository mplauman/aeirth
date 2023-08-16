import React from 'react';
import { useLoaderData } from 'react-router-dom';

import InformationDrawer from './InformationDrawer';
import Map from './Map';
import Markdown from './Markdown';

const MapLocation = ({campaign}) => {
  const location = useLoaderData()
  const map = campaign.getMap([location.map])

  const markers = map.locations.map((l) => campaign.getLocation(l)).concat(location)

  return (
    <>
      <Map x={location.x} y={location.y} initialScale={map.initialScale} minScale={map.minScale} maxScale={map.maxScale} title={map.display} image={map.content} markers={markers}/>
      <InformationDrawer title={location.display}>
        <Markdown campaign={campaign} content={location.content}/>
      </InformationDrawer>
    </>
  )
}

export default MapLocation;
