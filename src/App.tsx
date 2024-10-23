import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Homepage from './pages/Homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  }
]);

function App(): JSX.Element {
  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
