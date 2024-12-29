import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';
import TopBar from './TopBar';

function AppLayout(): JSX.Element {
  return (
    <>
      <NavBar />
      <TopBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
