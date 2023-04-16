import React from 'react';
import ReactDOM from 'react-dom';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const App = () => (
  <TimelineCollection name="Hinterlands of Fate's End" src='./assets/maps/fatesEnd.jpg'/>
)

function TimelineCollection({name, src}) {
  return (
    <TransformWrapper minScale={0.1} maxScale={3}>
      <TransformComponent wrapperStyle={{width: "100%", height: "100%"}}>
        <img alt={name} src={src}/>
      </TransformComponent>
    </TransformWrapper>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))

