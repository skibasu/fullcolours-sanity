import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Full Colours',

  projectId: 'zphxu027',
  dataset: 'fullcolours',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
