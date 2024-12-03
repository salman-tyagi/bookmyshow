import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import Homepage from './features/pages/Homepage';
import Movie from './features/pages/Movie';
import ErrorPage from './features/ui/ErrorPage';
import BuyTickets from './features/pages/BuyTickets';
import UserReviews from './features/pages/UserReviews';

import NavBar from './features/ui/NavBar';
import Footer from './features/ui/Footer';
import ExploreMovies from './features/movies/ExploreMovies';
import Spinner from './features/ui/Spinner';

import store from './store';

const AppLayout = lazy(() => import('./features/ui/AppLayout'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Spinner />}><AppLayout /></Suspense>
    ),
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
        path: 'explore/:movieDetails',
        element: <ExploreMovies />,
        errorElement: <ErrorPage />
      },
      {
        path: 'buytickets/:movieData',
        element: <BuyTickets />,
        errorElement: <ErrorPage />
      },
      {
        path: ':city/movies/:movieSlug/:movieId/user-reviews',
        element: <UserReviews />,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

const queryClient = new QueryClient({
  defaultOptions: { queries: { gcTime: 0 } }
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
