import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { tags } from 'sanity-plugin-tags'
import {
  dashboardTool,
  projectInfoWidget,
  projectUsersWidget,
  sanityTutorialsWidget,
} from '@sanity/dashboard'

export default defineConfig({
  title: 'huset-bergen',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_PROJECT_DATASET,
  plugins: [
    deskTool(),
    media(),
    tags(),
    visionTool(),
    dashboardTool({
      widgets: [
        sanityTutorialsWidget(),
        projectInfoWidget(),
        projectUsersWidget(),
      ],
    }),
  ],
  schema: {
    types: schemas,
  },
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (process.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
})
