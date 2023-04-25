import React from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const Map = ({initialScale, minScale, maxScale, children, name, image}) => {
  return (
    <TransformWrapper centerOnInit={true} centerZoomedOut={true} initialScale={initialScale} minScale={minScale} maxScale={maxScale}>
      <TransformComponent wrapperStyle={{width: "100%", height: "100%"}}>
        <div style={{position: "relative", background: "#999"}}>
          <img alt={name} src={image}/>
          {children}
        </div>
      </TransformComponent>
    </TransformWrapper>
  )
}

export default Map;