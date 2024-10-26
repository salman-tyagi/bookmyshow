import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoChevronDown } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';

import Logo from './Logo';
import SearchBar from './SearchBar';
import Login from '../authentication/MobileLogin';
import Hamburger from './Hamburger';

const NavBar = (): JSX.Element => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const openLoginModalHandler = (): void => {
    setShowLoginModal(true);
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

        <button
          className='rounded bg-rose-500 px-4 py-1 text-xs text-white transition-all hover:bg-rose-600 active:bg-rose-500'
          onClick={() => setShowLoginModal(true)}
        >
          Sign in
        </button>
        <RxHamburgerMenu
          size={24}
          className='cursor-pointer text-gray-900'
          onClick={() => setOpenBurgerMenu(true)}
        />
      </div>

      {showLoginModal && <Login onShow={setShowLoginModal} />}

      {openBurgerMenu && (
        <Hamburger
          onClose={() => setOpenBurgerMenu(false)}
          onShow={openLoginModalHandler}
        />
      )}
    </>
  );
};

export default NavBar;
