import React from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const Map = ({initialScale, minScale, maxScale, source, children}) => {
  return (
    <TransformWrapper limitToBounds={false} centerOnInit={true} initialScale={initialScale} minScale={minScale} maxScale={maxScale}>
      <TransformComponent wrapperStyle={{width: "100%", height: "100%"}}>
        <div>
          <img alt={source.title} src={source.image}/>
          {children}
        </div>
      </TransformComponent>
    </TransformWrapper>
  )
}

export default Map;