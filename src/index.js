import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

import './style.css';

// Default configuration for the Fate's End map. It's used in a bunch of spots, use the spread
// operator to populate stuff with these values then override specifics on a per use-case basis.
const fatesEnd = {
  title: 'The Hinterlands of Fate\'s End',
  image: 'https://d1pyjk54yi0zpw.cloudfront.net/maps/fatesEnd.jpg',
  initialScal: 0.5,
  minScale: 0.1,
  maxScale: 3,
  markers: [],
}

const tocEntries = [
  {
    title: 'Welcome',
    article: {
      module: import('./content/Welcome.md'),
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
          module: import('./content/Background/Gods of Aeirth.md'),
        }
      },
      {
        title: 'Calendar',
        map: null,
        article: {
          title: 'The Calendar of Aeirth',
          module: import('./content/Background/The Calendar.md'),
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
          module: import('./content/Watchmans/Overview.md'),
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
              module: import('./content/Watchmans/231.12.21 - A Murder Scene Most Fowl.md'),
            },
          },
          {
            title: '231.13.06',
            map: fatesEnd,
            article: {
              title: 'The Assignment',
              module: import('./content/Watchmans/231.13.06 - The Assignment.md'),
            },
          },
          {
            title: '231.13.07',
            map: fatesEnd,
            article: {
              title: 'A Watch Failure',
              module: import('./content/Watchmans/231.13.07 - A Watch Failure.md'),
            },
          },
          {
            title: '231.14.01',
            map: fatesEnd,
            article: {
              title: 'Safe Haven',
              module: import('./content/Watchmans/231.14.01 - Safe Haven.md'),
            },
          },
          {
            title: '231.14.02',
            map: fatesEnd,
            article: {
              title: 'Instigating and Investigating',
              module: import('./content/Watchmans/231.14.02 - Instigating and Investigating.md'),
            },
          },
          {
            title: '231.14.03',
            map: fatesEnd,
            article: {
              title: 'Mutual Ambushing',
              module: import('./content/Watchmans/231.14.03 - Mutual Ambushing.md'),
            },
          },
          {
            title: '231.14.04',
            map: fatesEnd,
            article: {
              title: 'The Report',
              module: import('./content/Watchmans/231.14.04 - The Report.md'),
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
          module: import('./content/Characters and Factions/Oggogul.md'),
        },
      },
      {
        title: 'Pally',
        article: {
          title: 'Pally the Paladin',
          module: import('./content/Characters and Factions/Pally.md'),
        },
      },
      {
        title: 'Romin',
        article: {
          title: 'Sergeant Romin',
          module: import('./content/Characters and Factions/Romin.md'),
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
          module: import('./content/Locations/Mog Caern.md'),
        },
      },
      {
        title: 'Roadside Camp',
        map: fatesEnd,
        article: {
          title: 'Roadside Camp',
          module: import('./content/Locations/Roadside Camp.md'),
        },
      },
      {
        title: 'Sly Fox Inn',
        map: fatesEnd,
        article: {
          title: 'Sly Fox Inn',
          module: import('./content/Locations/Sly Fox Inn.md'),
        },
      },
      {
        title: 'The Salt Wastes',
        map: fatesEnd,
        article: {
          title: 'The Salt Wastes',
          module: import('./content/Locations/The Salt Wastes.md'),
        },
      },
    ]
  },
];

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tocEntries={tocEntries}/>
  </React.StrictMode>
);
