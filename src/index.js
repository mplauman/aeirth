import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import FatesEnd from './maps/FatesEnd';

import './style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App>
      {{
        map: <FatesEnd/>
      }}
    </App>
  </StrictMode>
);
