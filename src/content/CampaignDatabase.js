
const articles = {
  welcome: {
    display: 'Welcome',
    content: 'Welcome.md',
  },
  gods: {
    display: 'Gods',
    content: 'Background/Gods of Aeirth.md',
  },
  calendar: {
    display: 'Calendar of Aeirth',
    content: 'Background/The Calendar.md',
  },
  watchmans: {
    display: 'Campaign - Watchmans',
    content: 'Watchmans/Overview.md',
  },
  oggogul: {
    display: 'Oggogul',
    content: 'Characters and Factions/Oggogul.md',
  },
  pally: {
    display: 'Pally',
    content: 'Characters and Factions/Pally.md',
  },
  romin: {
    display: 'Romin',
    content: 'Characters and Factions/Romin.md',
  },
}

const events = {
  watchmans_murder: {
    display: 'A Murder Most Fowl',
    content: 'Watchmans/231.12.21 - A Murder Scene Most Fowl.md',
    summary: 'We meet two guards. They are attacked by a dead bird.',
    location: 'mog_caern',
    game_date: '231-12-21',
    real_date: '2023-04-04',
  },
  watchmans_assignment: {
    display: 'The Assignment',
    content: 'Watchmans/231.13.06 - The Assignment.md',
    summary: 'The half brothers receive a special assignment.',
    location: 'mog_caern',
    game_date: '231-13-06',
    real_date: '2023-04-04',
  },
  watchmans_watch_failure: {
    display: 'A Watch Failure',
    content: 'Watchmans/231.13.07 - A Watch Failure.md',
    summary: 'One half brother keeps watch. The other... not so much.',
    location: 'roadside_camp',
    game_date: '231-13-07',
    real_date: '2024-04-04',
  },
  watchmans_safe_haven: {
    display: 'Safe Haven',
    content: 'Watchmans/231.14.01 - Safe Haven.md',
    summary: 'Exhausted, the half brothers arrive.',
    location: 'sly_fox',
    game_date: '231-14-01',
    real_date: '2024-04-04',
  },
  watchmans_instigating: {
    display: 'Instigating and Investigating',
    content: 'Watchmans/231.14.02 - Instigating and Investigating.md',
    summary: 'The brothers try to investigate a strange carriage, start a fight, then investigate a strange carriage.',
    location: 'sly_fox',
    game_date: '231-14-02',
    real_date: '2023-04-12',
  },
  watchmans_ambush: {
    display: 'Mutual Ambushing',
    content: 'Watchmans/231.14.03 - Mutual Ambushing.md',
    summary: 'The bothers are purused but turn the tables, ambushing the potential ambushers.',
    location: 'watchmans_ambush',
    game_date: '231-14-03',
    real_date: '2023-04-19',
  },
  watchmans_report: {
    display: 'The Report',
    content: 'Watchmans/231.14.04 - The Report.md',
    summary: 'The brothers return home and make their final report.',
    location: 'mog_caern',
    game_date: '231-14-04',
    real_date: '2023-04-20',
  },
}

const locations = {
  watchmans_ambush: {
    display: 'Ambush Site',
    maps: [
      { map: 'fates_end', icon: 'city', x: 3088, y: 1920 },
    ]
  },
  mog_caern: {
    display: 'Mog Caern',
    content: 'Locations/Mog Caern.md',
    maps: [
      { map: 'fates_end', icon: 'city', x: 2054, y: 1424 },
    ]
  },
  roadside_camp: {
    display: 'Roadside Camp',
    content: 'Locations/Roadside Camp.md',
    maps: [
      { map: 'fates_end', icon: 'city', x: 2862, y: 1524 },
    ]
  },
  sly_fox: {
    display: 'Sly Fox Inn',
    content: 'Locations/Sly Fox Inn.md',
    maps: [
      { map: 'fates_end', icon: 'city', x: 3108, y: 2122 },
    ]
  },
  salt_wastes: {
    display: 'The Salt Wastes',
    content: 'Locations/The Salt Wastes.md',
    maps: [
      { map: 'fates_end', icon: 'city', x: 364, y: 2248 },
    ]
  }
}

const maps = {
  fates_end: {
    display: 'The Hinterlands of Fate\'s End',
    content: 'https://d1pyjk54yi0zpw.cloudfront.net/maps/fatesEnd.jpg',
    initialScale: 0.5,
    minScale: 0.1,
    maxScale: 3,
    locations: [
      'mog_caern',
      'sly_fox',
      'salt_wastes',
    ]
  },
}

const CampaignDatabase = {
  articles: articles,
  events: events,
  locations: locations,
  maps: maps,
}

export default CampaignDatabase