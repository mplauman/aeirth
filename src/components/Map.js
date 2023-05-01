import React, { useEffect, useState } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import Loading from './Loading';

const Map = ({initialScale, minScale, maxScale, image, children, name}) => {
  const [loadedImage, setLoadedImage] = useState(null);

  useEffect(
    () => {
      const delay = (time) => {
        return new Promise(res => {
          setTimeout(res, time);
        });
      }

      const loadImage = async () => {
        await delay(500);
        const m = await image;

        setLoadedImage(m.default);
      }

      loadImage();
    },
    [loadedImage]
  )

  if (!loadedImage) {
    return (
      <Loading/>
    )
  }
  
  return (
    <TransformWrapper limitToBounds={false} centerOnInit={true} initialScale={initialScale} minScale={minScale} maxScale={maxScale}>
      <TransformComponent wrapperStyle={{width: "100%", height: "100%"}}>
        <div>
          <img alt={name} src={loadedImage}/>
          {children}
        </div>
      </TransformComponent>
    </TransformWrapper>
  )
}

export default Map;