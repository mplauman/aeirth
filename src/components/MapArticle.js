import React from 'react';
import { useLoaderData } from 'react-router-dom';

import InformationDrawer from './InformationDrawer';
import Map from './Map';
import Markdown from './Markdown';

const MapArticle = () => {
  const data = useLoaderData()

  return (
    <>
      <Map {...data.map}/>
      <InformationDrawer title={data.title}>
        <Markdown campaign={data.campaign} content={data.content}/>
      </InformationDrawer>
    </>
  )
}

export default MapArticle;
