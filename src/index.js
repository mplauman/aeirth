import React from 'react'
import CampaignWiki from './components/CampaignWiki'
import CampaignDatabase from './content/CampaignDatabase'

import {
  createRoot
} from 'react-dom/client'

import './style.css'

const context = require.context('./content/', true, /\.md$/)

const campaign = {
  loadContent: async (path) => {
    const contentPath = context('./' + path);
    const contentData = await fetch(contentPath);
    
    return await contentData.text()
  },

  resolveWikiLink: (wikiHref) => {
    const markdownHref = wikiHref + ".md"
    const markdownComponents = markdownHref.split('/')

    const matches = []
    
    for (const type in CampaignDatabase) {
      const objects = CampaignDatabase[type]

      for (const object_id in objects) {
        const object = objects[object_id]
        if (!object.content) {
          continue
        }

        const wikiForm = object.content.toLowerCase().replaceAll(' ', '_')
        const wikiFormComponents = wikiForm.split('/')
        if (wikiFormComponents.length < markdownComponents) {
          continue
        }

        while (wikiFormComponents.length > markdownComponents.length) {
          wikiFormComponents.shift()
        }

        if (wikiFormComponents.every((val, index) => val == markdownComponents[index])) {
          matches.push({
            type: type,
            id: object_id,
            path: wikiForm,
          })
        }
      }
    }

    const match = (matches.length == 1) ? matches[0] : matches.find((candidate) => {
      return candidate.path == markdownHref;
    })  

    return match ? (match.type + '/' + match.id) : wikiHref
  },

  findEntry: (path) => {
    const [type, id] = path ? path.split('/') : ['articles', '']
    return CampaignDatabase[type][id]  
  },

  getMap: (id) => CampaignDatabase.maps[id],
  getLocation: (id) => CampaignDatabase.locations[id],
  getEvent: (id) => CampaignDatabase.events[id],
  getArticle: (id) => CampaignDatabase.articles[id],
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CampaignWiki campaign={campaign}>
      {[
        {
          content: 'articles/welcome',
          entries: [
            'articles/aeirth',
            'articles/gods',
            'articles/calendar',
            'articles/fates_end',
          ]
        },
        {
          content: 'articles/watchmans',
          entries: [
            'events/watchmans_murder',
            'events/watchmans_assignment',
            'events/watchmans_watch_failure',
            'events/watchmans_safe_haven',
            'events/watchmans_instigating',
            'events/watchmans_ambush',
            'events/watchmans_report',
          ]
        },
        {
          display: 'Characters and Factions',
          entries: [
            'articles/oggogul',
            'articles/pally',
            'articles/romin',
            'articles/tor_millist',
          ]
        },
        {
          display: 'Locations',
          entries: [
            'locations/mog_caern',
            'locations/roadside_camp',
            'locations/sly_fox',
            'locations/salt_wastes',
          ]
        },
      ]}
    </CampaignWiki>
  </React.StrictMode>
)
