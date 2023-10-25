
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
  tor_millist: {
    display: 'Tor Millist',
    content: 'Characters and Factions/Tor Millist.md',
  },
  fates_end: {
    display: 'Fate\'s End',
    content: 'Background/Fates End.md',
  },
  aeirth: {
    display: 'Aeirth',
    content: 'Background/Aeirth.md',
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
  deep_bay: {
    display: 'Deep Bay',
    content: 'Locations/Deep Bay.md',
    map: 'fates_end',
    x: 1254,
    y: 2376,
  },
  dwarfholts: {
    display: 'Dwarfholts',
    content: 'Locations/Dwarfholts.md',
    map: 'fates_end',
    x: 3742,
    y: 2806,
  },
  festing_house: {
    display: 'Festing House',
    content: 'Locations/Festing House.md',
    map: 'fates_end',
    x: 2056,
    y: 300,
  },
  fettlewind_marsh: {
    display: 'Fettlewind Marsh',
    content: 'Locations/Fettlewind Marsh.md',
    map: 'fates_end',
    x: 2464,
    y: 2478,
  },
  garland_straits: {
    display: 'Garland Straits',
    contnet: 'Locations/Garland Straits.md',
    map: 'fates_end',
    x: 1677,
    y: 1641,
  },
  gloamhart_wood: {
    display: 'Gloamhart Wood',
    content: 'Locations/Gloamhart Wood.md',
    map: 'fates_end',
    x: 2210,
    y: 1876,
  },
  gorgeback_mountains: {
    display: 'Gorgeback Mountains',
    content: 'Locations/Gorgeback Mountains.md',
    map: 'fates_end',
    x: 3806,
    y: 650,
  },
  kaldar: {
    display: 'Kaldar',
    content: 'Locations/Kaldar.md',
    map: 'fates_end',
    x: 2280,
    y: 885,
  },
  last_resort: {
    display: 'Last Resort',
    content: 'Locations/Last Resort.md',
    map: 'fates_end',
    x: 762,
    y: 963,
  },
  luden: {
    display: 'Luden',
    content: 'Locations/Luden.md',
    map: 'fates_end',
    x: 1755,
    y: 2112,
  },
  mog_caern: {
    display: 'Mog Caern',
    content: 'Locations/Mog Caern.md',
    map: 'fates_end',
    x: 2054,
    y: 1424,
  },
  molth: {
    display: 'Molth',
    content: 'Locations/Molth.md',
    map: 'fates_end',
    x: 180,
    y: 2214,
  },
  mount_ire: {
    display: 'Mount Ire',
    content: 'Locations/Mount Ire.md',
    map: 'fates_end',
    x: 556,
    y: 1392,
  },
  northwoods: {
    display: 'Northwoods',
    content: 'Locations/Northwoods.md',
    map: 'fates_end',
    x: 2246,
    y: 134,
  },
  roadside_camp: {
    display: 'Roadside Camp',
    content: 'Locations/Roadside Camp.md',
    map: 'fates_end',
    x: 2862,
    y: 1524,
  },
  sharcons_redoubt: {
    display: "Sharcon's Redoubt",
    content: "Locations/Sharcon's Redoubt.md",
    map: 'fates_end',
    x: 1112,
    y: 2106,
  },
  sly_fox: {
    display: 'Sly Fox Inn',
    content: 'Locations/Sly Fox Inn.md',
    map: 'fates_end',
    x: 3108,
    y: 2122,
  },
  sopwith: {
    display: 'Sopwith',
    content: 'Locations/Sopwith.md',
    map: 'fates_end',
    x: 1164,
    y: 676,
  },
  salt_wastes: {
    display: 'The Salt Wastes',
    content: 'Locations/The Salt Wastes.md',
    map: 'fates_end',
    x: 364,
    y: 2248,
  },
  the_styes: {
    display: 'The Styes',
    content: 'Locations/The Styes.md',
    map: 'fates_end',
    x: 1446,
    y: 552,
  },
  viktal: {
    display: 'Viktal',
    content: 'Locations/Viktal.md',
    map: 'fates_end',
    x: 1329,
    y: 1542,
  },
  watchmans_ambush: {
    display: 'Ambush Site',
    map: 'fates_end',
    x: 3088,
    y: 1920,
  },
  woan_lake: {
    display: 'Woan Lake',
    content: 'Locations/Woan Lake.md',
    map: 'fates_end',
    x: 3072,
    y: 576,
  },
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