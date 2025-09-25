import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Little High Street 2',

  studio: {
    name: 'little-high-street', 
  },

  projectId: 'x4thwm7m',
  dataset: 'littlehighstreet',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
