import { vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import { defineConfig } from 'vite'
import path from 'path'

installGlobals()

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ['**/*.css'],
    }),
  ],
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'app'),
    },
  },
})
