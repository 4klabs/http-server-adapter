import type { HttpServer } from './interfaces';

export default class Server {
  constructor(private server: HttpServer) {}

  public async run(port: number) {
    this.server.route({
      method: 'post',
      path: '/logbooks',
      handler: (input, output) => {
        const status = 200;
        const data = { name: input.body.name };
        output({ status, data });
      },
    });

    this.server.listen(port);
  }
}
