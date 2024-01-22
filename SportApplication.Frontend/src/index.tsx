import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { App } from '@/App';
import { store } from '@/app/store';
import { AuthProvider } from '@/contexts/AuthContext';
import { MantineProvider, createTheme } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

export const queryClient = new QueryClient();
const theme = createTheme({ primaryColor: 'indigo' });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <ReduxProvider store={store}>
      <MantineProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </MantineProvider>
    </ReduxProvider>
  </AuthProvider>,
);
