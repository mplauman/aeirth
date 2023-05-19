import Maps from './Maps';

const FATES_END = {
  map: Maps.FATES_END,
  initialScal: 0.5,
  minScale: 0.1,
  maxScale: 3,
}

export const Directory = [
  {
    title: 'Welcome',
    content: import ('./content/Welcome.md'),
    ...FATES_END,
  },
  {
    title: 'Background',
    children: [
      {
        title: 'Gods',
        content: import('./content/Background/Gods of Aeirth.md'),
        ...FATES_END,
        markers: [
          { x: 2058, y: 1429, type: 'city' },
        ]
      },
      {
        title: 'Calendar',
        content: import('./content/Background/The Calendar.md'),
        ...FATES_END,
      },
    ]
  },
  {
    title: 'Campaign - The Watchmans',
    children: [
      {
        title: 'Overview',
        content: import('./content/Watchmans/Overview.md'),
        ...FATES_END,
      },
      {
        title: 'Timeline',
        children: [
          {
            title: '231.12.21',
            content: import('./content/Watchmans/231.12.21 - A Murder Scene Most Fowl.md'),
            ...FATES_END,
          },
          {
            title: '231.13.06',
            content: import('./content/Watchmans/231.13.06 - The Assignment.md'),
            ...FATES_END,
          },
          {
            title: '231.13.07',
            content: import('./content/Watchmans/231.13.07 - A Watch Failure.md'),
            ...FATES_END,
          },
          {
            title: '231.14.01',
            content: import('./content/Watchmans/231.14.01 - Safe Haven.md'),
            ...FATES_END,
          },
          {
            title: '231.14.02',
            content: import('./content/Watchmans/231.14.02 - Instigating and Investigating.md'),
            ...FATES_END,
          },
          {
            title: '231.14.03',
            content: import('./content/Watchmans/231.14.03 - Mutual Ambushing.md'),
            ...FATES_END,
          },
          {
            title: '231.14.04',
            content: import('./content/Watchmans/231.14.04 - The Report.md'),
            ...FATES_END,
          },
        ]
      },
    ]
  },
  {
    title: 'Characters and Factions',
    children: [
      {
        title: 'Oggogul',
        content: import('./content/Characters and Factions/Oggogul.md'),
        ...FATES_END,
      },
      {
        title: 'Pally',
        content: import('./content/Characters and Factions/Pally.md'),
        ...FATES_END,
      },
      {
        title: 'Romin',
        content: import('./content/Characters and Factions/Romin.md'),
        ...FATES_END,
      },
    ]
  },
  {
    title: 'Locations',
    children: [
      {
        title: 'Mog Caern',
        content: import('./content/Locations/Mog Caern.md'),
        ...FATES_END,
      },
      {
        title: 'Roadside Camp',
        content: import('./content/Locations/Roadside Camp.md'),
        ...FATES_END,
      },
      {
        title: 'Sly Fox Inn',
        content: import('./content/Locations/Sly Fox Inn.md'),
        ...FATES_END,
      },
      {
        title: 'The Salt Wastes',
        content: import('./content/Locations/The Salt Wastes.md'),
        ...FATES_END,
      },
    ]
  },
];

export default Directory;