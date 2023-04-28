import React, { useEffect, useState } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import Loading from './Loading';

const Map = ({initialScale, minScale, maxScale, children, name}) => {
  const [image, setImage] = useState(null);

  useEffect(
    () => {
      const delay = (time) => {
        return new Promise(res => {
          setTimeout(res, time);
        });
      }

      const awaitMap = async () => {
        await delay(500);
        const m = await children.image;

        setImage(m.default);
      }

      awaitMap();
    },
    [image]
  )

  if (!image) {
    return (
      <Loading/>
    )
  }
  
  return (
    <TransformWrapper centerOnInit={true} centerZoomedOut={true} initialScale={initialScale} minScale={minScale} maxScale={maxScale}>
      <TransformComponent wrapperStyle={{width: "100%", height: "100%"}}>
        <div>
          <img alt={name} src={image}/>
          {children.markers}
        </div>
      </TransformComponent>
    </TransformWrapper>
  )
}

export default Map;