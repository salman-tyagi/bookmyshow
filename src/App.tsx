import { Toaster } from 'react-hot-toast';

import Navbar from './ui/Navbar';

const App = (): JSX.Element => {
  return (
    <>
      <Toaster />
      <Navbar />
    </>
  );
};

export default App;
