import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './ui/AppLayout';
import Homepage from './features/pages/Homepage';
import Movie from './features/movies/Movie';

import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: 'home/:city',
        element: <Homepage />
      },
      {
        path: ':city/movies/:slug',
        element: <Movie />
      }
    ]
  }
]);

const queryClient = new QueryClient({
  defaultOptions: { queries: { gcTime: 10 * 1000 } }
});

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Toaster toastOptions={{ duration: 3000 }} />
        <RouterProvider router={router} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
