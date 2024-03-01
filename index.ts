import ExpressAdapter from './http/express-server';
import Server from './http/server';

// const httpAdapter = new HonoAdapter();
const httpAdapter = new ExpressAdapter();
const server = new Server(httpAdapter);
server.run(3000);
