"use client";
import { getQueryClient } from "@/lib/tanstack-query/client";
import MockProvider from "@/mocks/provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={getQueryClient()}>
      <MockProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </MockProvider>
    </QueryClientProvider>
  );
}
