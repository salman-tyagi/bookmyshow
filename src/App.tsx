import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import Homepage from './features/pages/Homepage';

import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  }
]);

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Toaster toastOptions={{ duration: 3000 }} />
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
