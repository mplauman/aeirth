import React from 'react'
import CampaignWiki from './components/CampaignWiki'

import {
  createRoot
} from 'react-dom/client'

import {
  database,
  table_of_contents
} from './database'

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

    const matches = []
    
    for (const type in database) {
      const objects = database[type]

      for (const object_id in objects) {
        const object = objects[object_id]
        if (!object.content) {
          continue
        }

        const wikiForm = object.content.toLowerCase().replaceAll(' ', '_')

        if (wikiForm.endsWith(markdownHref)) {
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
    return database[type][id]  
  },

  getMap: (id) => database.maps[id],
  getLocation: (id) => database.locations[id],
  getEvent: (id) => database.events[id],
  getArticle: (id) => database.articles[id],
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CampaignWiki campaign={campaign} tableOfContents={table_of_contents}/>
  </React.StrictMode>
)
