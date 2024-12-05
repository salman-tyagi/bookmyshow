import { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hooks';

import { GoChevronDown } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';

import useLocalStorage from '../hooks/useLocalStorage';
import Logo from './Logo';
import SearchBar from './SearchBar';
import SignIn from '../authentication/SignIn';
import Hamburger from './Hamburger';
import Cities from '../cities/Cities';

import { setCity } from '../cities/slices/citySlice';

import { getEmail, isAuthenticated } from '../authentication/utils';

type ActionTypes =
  | 'setShowSignInModal'
  | 'setOpenBurgerMenu'
  | 'setShowCitiesModal';

interface State {
  showSignInModal: boolean;
  openBurgerMenu: boolean;
  showCities: boolean;
}

const initialState: State = {
  showSignInModal: false,
  openBurgerMenu: false,
  showCities: false
};

const reducer = (
  state: State,
  action: { type: ActionTypes; payload: boolean }
): State => {
  switch (action.type) {
    case 'setShowSignInModal':
      return { ...state, showSignInModal: action.payload };

    case 'setOpenBurgerMenu':
      return { ...state, openBurgerMenu: action.payload };

    case 'setShowCitiesModal':
      return { ...state, showCities: action.payload };

    default:
      throw new Error('Unknown action');
  }
};

const NavBar = (): JSX.Element => {
  const [{ showSignInModal, openBurgerMenu, showCities }, dispatch] =
    useReducer(reducer, initialState);

  const reduxDispatch = useAppDispatch();

  const [storedCity, setStoredCity] = useLocalStorage('city', '');

  const user = isAuthenticated();
  const email = getEmail();

  const handleStoreCity = (city: string) => {
    setStoredCity(city);
  };

  const handleShowSignIn = (): void => {
    dispatch({ type: 'setShowSignInModal', payload: true });
    handleCloseBurgerMenu();
  };

  const handleShowBurgerMenu = (): void => {
    dispatch({ type: 'setOpenBurgerMenu', payload: true });
  };

  const handleShowCities = (): void => {
    dispatch({ type: 'setShowCitiesModal', payload: true });
  };

  const handleCloseSignIn = (): void => {
    dispatch({ type: 'setShowSignInModal', payload: false });
  };

  function handleCloseBurgerMenu(): void {
    dispatch({ type: 'setOpenBurgerMenu', payload: false });
  }

  const handleCloseCities = (): void => {
    dispatch({ type: 'setShowCitiesModal', payload: false });
  };

  useEffect(() => {
    if (storedCity) return;
    handleShowCities();
  }, [storedCity]);

  useEffect(() => {
    reduxDispatch(setCity(storedCity));
  }, [storedCity, reduxDispatch]);

  return (
    <>
      <div className='mx-4 my-3 flex items-center gap-6 md:mx-6 xl:mx-36'>
        <Link to='/'>
          <Logo />
        </Link>

        <SearchBar placeholder='Search for Movies, Events, Plays, Sports and Activities' />

        <div
          className='ml-auto flex items-center gap-4 text-sm'
          onClick={handleShowCities}
        >
          <button>{storedCity || 'Select city'}</button>
          <GoChevronDown />
        </div>

        {!user ? (
          <>
            <button
              className='rounded-sm bg-rose-500 px-4 py-1 text-xs text-white transition-all hover:bg-rose-600 active:bg-rose-500'
              onClick={handleShowSignIn}
            >
              Sign in
            </button>

            <RxHamburgerMenu
              size={24}
              className='cursor-pointer text-gray-900'
              onClick={handleShowBurgerMenu}
            />
          </>
        ) : (
          <button
            className='flex items-center gap-3'
            onClick={handleShowBurgerMenu}
          >
            <img className='w-7' src='/images/default-photo.webp' alt='photo' />
            <span className='max-w-24 truncate text-sm font-medium'>
              Hi, {email}
            </span>
          </button>
        )}
      </div>

      {showSignInModal && <SignIn onClose={handleCloseSignIn} />}

      {openBurgerMenu && (
        <Hamburger
          onShowSignIn={handleShowSignIn}
          onClose={handleCloseBurgerMenu}
        />
      )}

      {showCities && (
        <Cities onStoreCity={handleStoreCity} onClose={handleCloseCities} />
      )}
    </>
  );
};

export default NavBar;
