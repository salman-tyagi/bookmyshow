import { useEffect } from 'react';

import HamburgerMenuList from './HamburgerMenuList';
import { IoChevronForward } from 'react-icons/io5';

import { useAppSelector } from '../hooks/hooks';

import { getEmail, logout } from '../authentication/utils';

interface HamburgerMenuProps {
  onShowSignIn(): void;
  onClose(): void;
}

function HamburgerMenu({
  onShowSignIn,
  onClose
}: HamburgerMenuProps): JSX.Element {
  const { isAuthenticated, user: { firstName, lastName, photo } } = useAppSelector(state => state.users);

  const email = getEmail();
  const fullName = `${firstName} ${lastName}`;

  useEffect(() => {
    const keyDownFn = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      onClose();
    };

    document.body.style.overflow = 'hidden';
    document.body.addEventListener('keydown', keyDownFn);

    return () => {
      document.body.removeEventListener('keydown', keyDownFn);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className='overlay' onClick={onClose}>
      <div
        className='no-scrollbar animate-slide-left fixed top-0 right-0 h-full w-96 overflow-y-auto bg-white shadow-[-2px_0_2px_2px_rgba(0,0,0,0.05)]'
        onClick={e => e.stopPropagation()}
      >
        <div className='sticky top-0 z-10 bg-inherit'>
          {!isAuthenticated ? (
            <p className='border-b p-4 text-2xl font-bold text-gray-800'>
              Hey!
            </p>
          ) : (
            <div className='flex items-center justify-between border-b px-4 py-3'>
              <div>
                <p className='text-xl font-bold text-gray-800'>
                  Hi, {fullName || email}
                </p>
                <button className='flex items-center text-xs'>
                  <span>Edit Profile</span>
                  <IoChevronForward />
                </button>
              </div>

              <img
                className='max-w-10 rounded-full'
                src={photo || '/images/default-photo.webp'}
                alt="user's photo"
              />
            </div>
          )}

          {!isAuthenticated && (
            <div className='flex items-center justify-between p-4 leading-none shadow-md'>
              <img
                className='w-[40px]'
                src='/images/rewards-login.png'
                alt='rewards-img'
              />
              <p className='text-violet-500'>
                Unlock special offers & <br /> great benefits
              </p>
              <button
                className='rounded-lg border border-red-500 p-2 text-xs font-bold text-red-500'
                onClick={onShowSignIn}
              >
                Login / Register
              </button>
            </div>
          )}
        </div>

        <HamburgerMenuList />

        {isAuthenticated && (
          <div className='absolute bottom-0 w-full border bg-white p-3'>
            <button
              className='w-full rounded-sm border border-red-500 py-2 text-lg font-semibold text-rose-500'
              onClick={logout}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HamburgerMenu;
