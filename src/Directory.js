export const Directory = [
  {
    title: 'Welcome',
    load: () => { return import('./content/Welcome') }
  },
  {
    title: 'The Gods',
    load: () => { return import('./content/Gods Of Aeirth') }
  },
  {
    title: 'Bestiary',
    children: [
      {
        title: 'Weiner Dog',
        load: () => { return import('./content/beasts/Weiner Dog') }
      },
    ],
  },
];

export default Directory;