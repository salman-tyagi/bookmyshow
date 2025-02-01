import { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

import { GoChevronDown } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';

import Logo from './Logo';
import SearchBar from './SearchBar';
import SignIn from '../authentication/SignIn';
import Hamburger from './Hamburger';
import Cities from '../cities/Cities';

import { setCity } from '../cities/slices/citySlice';

import { getItem, setItem } from '../utils/localStorage';
import createSlug from '../utils/createSlug';

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

  const { isAuthenticated, user: { firstName, lastName, photo } } = useAppSelector(state => state.users);
  const { city } = useAppSelector(state => state.cities);

  const reduxDispatch = useAppDispatch();

  const email = getItem<string>('email');
  const fullName = `${firstName} ${lastName}`;

  const handleStoreCity = (city: string) => {
    const slugCity = createSlug(city);
    setItem('city', slugCity);
    reduxDispatch(setCity(slugCity));
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
    if (city) return;
    handleShowCities();
  }, [city]);

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
          <button>
            {city?.replace(city[0], city[0]?.toUpperCase()) || 'Select city'}
          </button>
          <GoChevronDown />
        </div>

        {!isAuthenticated ? (
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
            <img
              className='w-7 rounded-full'
              src={photo || '/images/default-photo.webp'}
              alt='photo'
            />
            <span className='max-w-24 truncate text-sm font-medium'>
              Hi, {fullName || email}
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
