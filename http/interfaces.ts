export type HttpHandler = (
  input: {
    query: Record<string, any>;
    body: Record<string, any>;
  },
  output: (params: { status: number; data: any }) => void
) => void;

export type HttpRouter = {
  method: string;
  path: string;
  handler: HttpHandler;
};

export interface HttpServer {
  listen(port: number): void;
  route(params: HttpRouter): void;
}
