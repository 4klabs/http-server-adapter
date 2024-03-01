import express, { type Express } from 'express';
import type { HttpRouter, HttpServer } from './interfaces';

export default class ExpressAdapter implements HttpServer {
  private server: Express;

  constructor() {
    this.server = express();
    this.server.use(express.json());
  }

  listen(port: number): void {
    this.server.listen(port, () => {
      console.log('Server is running on port: ' + port);
    });
  }

  route({ method, path, handler }: HttpRouter): void {
    this.server.route(path)[method as 'get']((expressReq, expressRes) => {
      handler(
        // input
        {
          query: expressReq.query,
          body: { name: 'express' },
        },
        // output
        ({ status, data }) => {
          expressRes.status(status).send(data);
        }
      );
    });
  }
}
