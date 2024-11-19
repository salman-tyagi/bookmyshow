import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import AppLayout from './features/ui/AppLayout';
import Homepage from './features/pages/Homepage';
import Movie from './features/movies/Movie';
import ErrorPage from './features/ui/ErrorPage';
import NavBar from './features/ui/NavBar';
import Footer from './features/ui/Footer';
import ExploreMovies from './features/movies/ExploreMovies';
import BuyTickets from './features/pages/BuyTickets';

import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: (
      <>
        <NavBar />
        <ErrorPage />
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: <Homepage />,
        errorElement: <ErrorPage />
      },
      {
        path: 'home/:city',
        element: <Homepage />,
        errorElement: <ErrorPage />
      },
      {
        path: ':city/movies/:slug',
        element: <Movie />,
        errorElement: <ErrorPage />
      },
      {
        path: 'explore/:movies',
        element: <ExploreMovies />,
        errorElement: <ErrorPage />
      },
      {
        path: 'buytickets/:movieData/:releaseId/:date',
        element: <BuyTickets />,
        errorElement: <ErrorPage />
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
      <Toaster toastOptions={{ duration: 3000 }} />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
