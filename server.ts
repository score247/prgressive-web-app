import nextI18next from './common/helpers/Localizer';
import express from 'express';
import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';
import { IncomingMessage, ServerResponse } from 'http';

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.use(nextI18NextMiddleware(nextI18next));

  server.get('/', (req, res) => {
    return app.render(req, res, '/basketball');
  });

  server.get("*", (req: IncomingMessage, res: ServerResponse) => handler(req, res));

  server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
