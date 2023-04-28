import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import Article from './components/Article';
import Category from './components/Category';
import FatesEnd from './maps/FatesEnd';

import './style.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      {{
        map: <FatesEnd/>,
        articles:
          <>
            <Article title='An article'/>
            <Article title='Another article'/>
            <Category title='Bestiary'>
              <Article title='Weiner dog'/>
            </Category>
          </>
      }}
    </App>
  </React.StrictMode>
);
