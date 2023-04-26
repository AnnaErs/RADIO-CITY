import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [react(), svgLoader()],
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
