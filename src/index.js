import React from 'react';
import ReactDOM from 'react-dom';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const App = () => (
  <TimelineCollection name="Hinterlands of Fate's End" src='./assets/maps/fatesEnd.jpg' initialScale={0.5} minScale={0.1} maxScale={3}/>
)

function TimelineCollection({name, src, initialScale, minScale, maxScale}) {
  return (
    <TransformWrapper centerOnInit={true} centerZoomedOut={true} initialScale={initialScale} minScale={minScale} maxScale={maxScale}>
      <TransformComponent wrapperStyle={{width: "100%", height: "100%"}}>
        <img alt={name} src={src}/>
      </TransformComponent>
    </TransformWrapper>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))

