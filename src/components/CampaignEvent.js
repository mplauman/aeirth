import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import InformationDrawer from './InformationDrawer';
import Map from './Map';
import Markdown from './Markdown';

const CampaignEvent = ({campaign, database}) => {
  const event = useLoaderData()
  const location = database['locations'][event.location]
  const map = database['maps'][location.maps[0].map]

  const [content, setContent] = useState("Loading...")

  useEffect(() => {
    campaign
      .loadContent(event.content)
      .then((content) => setContent(content))
  })

  const mapMarkers = map.locations.map((l, index) => {
    const mapLocation = database['locations'][l]
    return mapLocation.maps[0]
  })
  const locationMarkers = [
    { x: location.maps[0].x, y: location.maps[0].y }
  ]

  const markers = mapMarkers.concat(locationMarkers)

  return (
    <>
      <Map initialScale={map.initialScale} minScale={map.minScale} maxScale={map.maxScale} title={map.display} image={map.content} markers={markers}/>
      <InformationDrawer title={event.display}>
        <Markdown campaign={campaign} content={content}/>
      </InformationDrawer>
    </>
  )
}

export default CampaignEvent;
