import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import FatesEnd from './maps/FatesEnd';

import './style.css';

const App = () => {
  return (
    <FatesEnd/>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
