import { isServer, QueryCache, QueryClient } from "@tanstack/react-query";

export const defaultStaleTime = 60 * 1000;

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: defaultStaleTime,
      },
    },
    queryCache: new QueryCache({}),
  });
}
let browswerQueryClient: QueryClient | undefined;
export function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  }

  if (!browswerQueryClient) {
    browswerQueryClient = makeQueryClient();
  }
  return browswerQueryClient;
}
