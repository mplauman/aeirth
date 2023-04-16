import React from 'react';
import ReactDOM from 'react-dom';
import { KeepScale, ReactZoomPanPinchProps, TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import City from './assets/markers/city.svg';

const App = () => (
  <TimelineCollection name="Hinterlands of Fate's End" src='./assets/maps/fatesEnd.jpg' initialScale={0.5} minScale={0.1} maxScale={3}/>
)

function Marker({x, y}) {
  return (
    <div style={{position: "absolute", top: y, left: x, zIndex: 2, transform: 'translate(-50%, -50%)' }}>
      <KeepScale>
        <City style={{ height: 53, width: 53 }}/>
      </KeepScale>
    </div>
  )
}

function MogCaern() {
  return (
    <Marker x='2058px' y='1429px'/>
  )
}

function TimelineCollection({name, src, initialScale, minScale, maxScale}) {
  return (
    <TransformWrapper centerOnInit={true} centerZoomedOut={true} initialScale={initialScale} minScale={minScale} maxScale={maxScale}>
      <TransformComponent wrapperStyle={{width: "100%", height: "100%"}}>
        <div style={{position: "relative", background: "#999"}}>
          <img alt={name} src={src}/>
          <MogCaern/>
        </div>
      </TransformComponent>
    </TransformWrapper>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))

