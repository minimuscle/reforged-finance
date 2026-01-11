import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      customScaffolding: {
        routeTemplate: [
          '%%tsrImports%%',
          '\n\n',
          '/******************************************************\n',
          ' *   ROUTE START\n',
          ' ******************************************************/\n',
          '%%tsrExportStart%%{\n',
          '   component: RouteComponent\n',
          '}%%tsrExportEnd%%\n\n',
          '/******************************************************\n',
          ' *   ROUTE COMPONENT START\n',
          ' ******************************************************/\n',
          'function RouteComponent() {\n\n',
          '  /***** RENDER *****/\n',
          '  return (\n',
          '      <div>Hello "%%tsrPath%%"!</div>\n',
          '  );\n',
          '};\n',
        ].join(''),
      },
    }),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      components: '/src/components',
      utils: '/src/utils',
      routes: '/src/routes',
      api: '/src/api',
      assets: '/src/assets',
    },
  },
})
