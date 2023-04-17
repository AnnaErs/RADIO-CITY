import path from 'node:path';
import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
import express from 'express';
import {createServer as createViteServer} from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: {middlewareMode: true},
    appType: 'custom'
  });
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      const transformedTemplate = await vite.transformIndexHtml(url, template);
      const {render} = await vite.ssrLoadModule('src/entry-server.tsx');

      const appHtml = await render(url);
      const html = transformedTemplate.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({'Content-Type': 'text/html'}).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(vite.config.server.port);
}

createServer();
