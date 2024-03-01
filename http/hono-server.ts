import { Hono, type Env } from 'hono';
import type { HttpRouter, HttpServer } from './interfaces';

export class HonoAdapter implements HttpServer {
  private server: Hono<Env, any, '/'>;

  constructor() {
    this.server = new Hono();
  }

  listen(port: number): void {}

  route({ method, path, handler }: HttpRouter): void {
    this.server[method as 'get'](path, (honoCtx) => {
      handler(
        // input
        {
          query: honoCtx.req.query(),
          body: { name: 'hono' },
        },
        // output
        ({ status, data }) => {
          honoCtx.status(status as any);
          honoCtx.json(data);
        }
      );
    });
  }
}
