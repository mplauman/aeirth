import React from 'react';
import ReactDOM from 'react-dom';
import Style from './style.css';
import FatesEnd from './maps/FatesEnd';

const App = () => {
  return (
    <FatesEnd/>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
