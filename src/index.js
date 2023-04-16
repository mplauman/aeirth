import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { KeepScale, ReactZoomPanPinchProps, TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import City from './assets/markers/city.svg';
import FatesEndMap from './assets/maps/fatesEnd.jpg';
import Style from './style.css';

const App = (props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, [loaded])

  return (
    loaded ? <TimelineCollection name="Hinterlands of Fate's End" src={FatesEndMap} initialScale={0.5} minScale={0.1} maxScale={3}/> : <Loading/>
  )
}

const Marker = (props) => {
  return (
    <div className='marker' style={{ top: props.y, left: props.x }}>
      <KeepScale>
        { props.children }
      </KeepScale>
    </div>
  )
}

function MogCaern() {
  return (
    <Marker x='2058px' y='1429px'>
      <City/>
    </Marker>
  )
}

const TimelineCollection = (props) => {
  return (
    <TransformWrapper centerOnInit={true} centerZoomedOut={true} initialScale={props.initialScale} minScale={props.minScale} maxScale={props.maxScale}>
      <TransformComponent wrapperStyle={{width: "100%", height: "100%"}}>
        <div style={{position: "relative", background: "#999"}}>
          <img alt={props.name} src={props.src}/>
          <MogCaern/>
        </div>
      </TransformComponent>
    </TransformWrapper>
  )
}

const Loading = (props) => {
  return (
    <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>Loading...</div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))

