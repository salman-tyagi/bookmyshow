import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoChevronDown } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';

import Logo from './Logo';
import SearchBar from './SearchBar';
import Hamburger from './Hamburger';
import SignIn from '../authentication/SignIn';

import isAuthenticated from '../utils/isAuthenticated';
import getEmail from '../utils/getEmail';

const NavBar = (): JSX.Element => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const user = isAuthenticated();
  const email = getEmail();

  const openSignInModalHandler = (): void => {
    setShowSignInModal(true);
    setOpenBurgerMenu(false);
  };

  return (
    <>
      <div className='mx-4 my-3 flex items-center gap-6 md:mx-6 xl:mx-36'>
        <Link to='/'>
          <Logo />
        </Link>

        <SearchBar placeholder='Search for Movies, Events, Plays, Sports and Activities' />

        <div className='ml-auto flex items-center gap-4 text-sm'>
          <button>Delhi-NCR</button>
          <GoChevronDown />
        </div>

        {!user ? (
          <>
            <button
              className='rounded bg-rose-500 px-4 py-1 text-xs text-white transition-all hover:bg-rose-600 active:bg-rose-500'
              onClick={() => setShowSignInModal(true)}
            >
              Sign in
            </button>
            <RxHamburgerMenu
              size={24}
              className='cursor-pointer text-gray-900'
              onClick={() => setOpenBurgerMenu(true)}
            />
          </>
        ) : (
          <button
            className='flex items-center gap-3'
            onClick={() => setOpenBurgerMenu(true)}
          >
            <img className='w-7' src='/images/default-photo.webp' alt='photo' />
            <span className='max-w-24 truncate text-sm font-medium'>
              Hi, {email}
            </span>
          </button>
        )}
      </div>

      {showSignInModal && (
        <SignIn
          onShow={setShowSignInModal}
          onClose={() => setShowSignInModal(false)}
        />
      )}

      {openBurgerMenu && (
        <Hamburger
          onShowSignIn={openSignInModalHandler}
          onClose={() => setOpenBurgerMenu(false)}
        />
      )}
    </>
  );
};

export default NavBar;
