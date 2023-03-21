import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
import { visionTool } from '@sanity/vision'
import {
  dashboardTool,
  projectInfoWidget,
  projectUsersWidget,
  sanityTutorialsWidget,
} from '@sanity/dashboard'

export default defineConfig({
  title: 'huset-bergen',
  projectId: 'yrgb4fn1',
  dataset: 'production',
  plugins: [
    deskTool(),
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
    // @ts-ignore
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
})
