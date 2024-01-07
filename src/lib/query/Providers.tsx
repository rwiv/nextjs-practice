"use client"

import {ReactNode, useState} from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export default function Providers({ children }: { children: ReactNode }) {
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
