import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import City from './assets/markers/city.svg';
import Style from './style.css';
import Marker from './components/Marker';
import Loading from './components/Loading';
import Map from './components/Map'

const App = () => {
  const [map, setMap] = useState(null);

  useEffect(
    () => {
      const delay = (time) => {
        return new Promise(res => {
          setTimeout(res, time);
        });
      }

      const loadMap = async () => {
        await delay(500);
        const m = await import('./assets/maps/fatesEnd.jpg');

        setMap(m.default);
      }

      loadMap();
    },
    [map]
  )

  if (map) {
    return (
      <Map name="Hinterlands of Fate's End" image={map} initialScale={0.5} minScale={0.1} maxScale={3}>
        <Marker x='2058px' y='1429px'>
          <City/>
        </Marker>
      </Map>
    )
  }

  return (
    <Loading/>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
