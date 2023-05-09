export const Directory = [
  {
    title: 'Welcome',
    load: () => { return import('./content/Welcome') }
  },
  {
    title: 'Background',
    children: [
      {
        title: 'The Gods',
        load: () => { return import('./content/Background/Gods of Aeirth') }
      },
      {
        title: 'The Calendar',
        load: () => { return import('./content/Background/The Calendar') }
      },
    ]
  },
  {
    title: 'Campaign - The Watchmans',
    children: [
      {
        title: 'Overview',
        load: () => { return import('./content/Watchmans/Overview') },
      },
      {
        title: 'Timeline',
        children: [
          {
            title: '231.12.21',
            load: () => { return import('./content/Watchmans/231.12.21 - A Murder Scene Most Fowl') },
          },
          {
            title: '231.13.06',
            load: () => { return import('./content/Watchmans/231.13.06 - The Assignment') },
          },
          {
            title: '231.13.07',
            load: () => { return import('./content/Watchmans/231.13.07 - A Watch Failure') },
          },
          {
            title: '231.14.01',
            load: () => { return import('./content/Watchmans/231.14.01 - Safe Haven') },
          },
          {
            title: '231.14.02',
            load: () => { return import('./content/Watchmans/231.14.02 - Instigating and Investigating') },
          },
          {
            title: '231.14.03',
            load: () => { return import('./content/Watchmans/231.14.03 - Mutual Ambushing') },
          },
          {
            title: '231.14.04',
            load: () => { return import('./content/Watchmans/231.14.04 - The Report') },
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
        load: () => { return import('./content/Characters and Factions/Oggogul') },
      },
      {
        title: 'Pally',
        load: () => { return import('./content/Characters and Factions/Pally') },
      },
      {
        title: 'Romin',
        load: () => { return import('./content/Characters and Factions/Romin') },
      },
    ]
  }
];

export default Directory;