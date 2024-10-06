import { useState } from 'react';

import { GoChevronDown } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';

import Logo from './Logo';
import SearchBar from './SearchBar';
import Login from '../authentication/Login';

const Navbar = (): JSX.Element => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <section className='container mx-auto'>
        <div className='mx-4 my-3 flex items-center gap-8 md:mx-6 xl:mx-48'>
          <Logo />

          <SearchBar placeholder='Search for Movies, Events, Plays, Sports and Activities' />

          <div className='ml-auto flex items-center gap-4 text-sm text-gray-700'>
            <button>Delhi-NCR</button>
            <GoChevronDown />
          </div>

          <button
            className='rounded bg-rose-500 px-4 py-1 text-sm text-white transition-all hover:bg-rose-600 active:bg-rose-500'
            onClick={() => setShowLoginModal(true)}
          >
            Sign in
          </button>
          <RxHamburgerMenu className='cursor-pointer text-lg text-gray-900' />
        </div>
      </section>

      {showLoginModal && <Login setShowLoginModal={setShowLoginModal} />}
    </>
  );
};

export default Navbar;
