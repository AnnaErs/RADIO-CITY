import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr({exportAsDefault:true})],
  server: {
    port: 3000
  },
  root: '',
  resolve: {
    alias: [
      {
        find: '@api',
        replacement: '/src/api/'
      },
      {
        find: '@ui-kit',
        replacement: '/src/ui-kit/'
      },
      {
        find: '@components',
        replacement: '/src/components/'
      },
      {
        find: '@utils',
        replacement: '/src/utils/'
      }
    ]
  }
});
