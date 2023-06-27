import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

import './style.css';

// Default configuration for the Fate's End map. It's used in a bunch of spots, use the spread
// operator to populate stuff with these values then override specifics on a per use-case basis.
const fatesEnd = {
  title: 'The Hinterlands of Fate\'s End',
  image: 'https://d1pyjk54yi0zpw.cloudfront.net/maps/fatesEnd.jpg',
  initialScale: 0.5,
  minScale: 0.1,
  maxScale: 3,
  markers: [
    { x: 2054, y: 1424, type: 'city' },
    { x: 1106, y: 2108, type: 'city' },
    { x: 3102, y: 2100, type: 'city' },
  ],
}

const context = require.context('./content/', true, /\.md$/)
context.keys().forEach( (key) => {
  console.log(key, context.resolve(key))
})

const tocEntries = [
  {
    title: 'Welcome',
    article: {
      path: './Welcome.md',
    }
  },
  {
    title: 'Background',
    children: [
      {
        title: 'Gods',
        map: null,
        article: {
          title: 'The Gods of Aeirth',
          path: './Background/Gods of Aeirth.md',
        }
      },
      {
        title: 'Calendar',
        map: null,
        article: {
          title: 'The Calendar of Aeirth',
          path: './Background/The Calendar.md',
        }
      },
    ]
  },
  {
    title: 'Campaign - The Watchmans',
    children: [
      {
        title: 'Overview',
        article: {
          title: 'Campaign Overview',
          path: './Watchmans/Overview.md',
        }
      },
      {
        title: 'Timeline',
        children: [
          {
            title: '231.12.21',
            map: fatesEnd,
            article: {
              title: 'A Murder Scene Most Fowl',
              path: './Watchmans/231.12.21 - A Murder Scene Most Fowl.md',
            },
          },
          {
            title: '231.13.06',
            map: fatesEnd,
            article: {
              title: 'The Assignment',
              path: './Watchmans/231.13.06 - The Assignment.md',
            },
          },
          {
            title: '231.13.07',
            map: fatesEnd,
            article: {
              title: 'A Watch Failure',
              path: './Watchmans/231.13.07 - A Watch Failure.md',
            },
          },
          {
            title: '231.14.01',
            map: fatesEnd,
            article: {
              title: 'Safe Haven',
              path: './Watchmans/231.14.01 - Safe Haven.md',
            },
          },
          {
            title: '231.14.02',
            map: fatesEnd,
            article: {
              title: 'Instigating and Investigating',
              path: './Watchmans/231.14.02 - Instigating and Investigating.md',
            },
          },
          {
            title: '231.14.03',
            map: fatesEnd,
            article: {
              title: 'Mutual Ambushing',
              path: './Watchmans/231.14.03 - Mutual Ambushing.md',
            },
          },
          {
            title: '231.14.04',
            map: fatesEnd,
            article: {
              title: 'The Report',
              path: './Watchmans/231.14.04 - The Report.md',
            },
          },
        ]
      },
    ]
  },
  {
    title: 'Characters and Factions',
    children: [
      {
        title: 'Oggogul the Monk',
        article: {
          title: 'Oggogul',
          path: './Characters and Factions/Oggogul.md',
        },
      },
      {
        title: 'Pally',
        article: {
          title: 'Pally the Paladin',
          path: './Characters and Factions/Pally.md',
        },
      },
      {
        title: 'Romin',
        article: {
          title: 'Sergeant Romin',
          path: './Characters and Factions/Romin.md',
        },
      },
    ]
  },
  {
    title: 'Locations',
    children: [
      {
        title: 'Mog Caern',
        map: fatesEnd,
        article: {
          title: 'Mog Caern',
          path: './Locations/Mog Caern.md',
        },
      },
      {
        title: 'Roadside Camp',
        map: fatesEnd,
        article: {
          title: 'Roadside Camp',
          path: './Locations/Roadside Camp.md',
        },
      },
      {
        title: 'Sly Fox Inn',
        map: fatesEnd,
        article: {
          title: 'Sly Fox Inn',
          path: './Locations/Sly Fox Inn.md',
        },
      },
      {
        title: 'The Salt Wastes',
        map: fatesEnd,
        article: {
          title: 'The Salt Wastes',
          path: './Locations/The Salt Wastes.md',
        },
      },
    ]
  },
];

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App context={context} tocEntries={tocEntries}/>
  </React.StrictMode>
);
