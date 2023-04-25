import React from 'react';
import ReactDOM from 'react-dom';
import City from './assets/markers/city.svg';
import Style from './style.css';
import Marker from './components/Marker';
import Map from './components/Map'

const App = () => {
  return (
    <Map name="Hinterlands of Fate's End" asset={import('./assets/maps/fatesEnd.jpg')} initialScale={0.5} minScale={0.1} maxScale={3}>
      <Marker x='2058px' y='1429px'>
        <City/>
      </Marker>
    </Map>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
