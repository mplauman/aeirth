import React from 'react';
import ReactDOM from 'react-dom';
import Style from './style.css';
import MapMarker from './components/MapMarker';
import Map from './components/Map'

const App = () => {
  return (
    <Map name="Hinterlands of Fate's End" asset={import('./assets/maps/fatesEnd.jpg')} initialScale={0.5} minScale={0.1} maxScale={3}>
      <MapMarker x='2058px' y='1429px' type='city'/>
    </Map>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
