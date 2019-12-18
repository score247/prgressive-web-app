import nextI18next from './common/helpers/Localizer';
import express from 'express';
import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';

//const nextI18next = require("./common/helpers/Localizer").default;

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.use(nextI18NextMiddleware(nextI18next));

  server.get("*", (req: any, res: any) => handle(req, res));

  server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
