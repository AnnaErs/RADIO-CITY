import {defineConfig} from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr({exportAsDefault: true})],
  server: {
    port: 3000
  },
  root: ''
});
