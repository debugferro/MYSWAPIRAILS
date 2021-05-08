import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App';

export const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  const element = document.createElement('div');
  ReactDOM.render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
    document.body.appendChild(element),
  )
})
