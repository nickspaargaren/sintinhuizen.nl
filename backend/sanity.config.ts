import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'
import {nlNLLocale} from '@sanity/locale-nl-nl'

export default defineConfig({
  name: 'default',
  title: 'sintinhuizen.nl',

  projectId: 'az5d5e06',
  dataset: 'production',

  plugins: [structureTool(), nlNLLocale(),],

  schema: {
    types: schemaTypes,
  },
})
