// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyOk = any;

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'DELETE';

export interface Environment {
  NODE_ENV: 'development' | undefined;
  CONTENT_UPSTREAM: string;
  CONTENT_REPO_OWNER: string;
  CONTENT_REPO_NAME: string;
  CONTENT_REPO_REF: string;
  CONTENT_REPO_ROOT_PATH?: string;
  [key: string]: string;
}

export interface Invocation {
  requestId: string;
}

export interface Context {
  log: Console;
  env: Environment;
  url: URL;
  invocation: Invocation;
}

export type Route = (
  req: Request,
  ctx: Context
) => Promise<Response | undefined | void> | Response | undefined | void;