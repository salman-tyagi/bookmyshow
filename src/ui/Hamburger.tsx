import { useEffect, useRef } from 'react';

import HamburgerMenuList from './HamburgerMenuList';

interface HamburgerMenuProps {
  onClose(): void;
  onOpenLoginModal(): void;
}

function HamburgerMenu({
  onClose,
  onOpenLoginModal
}: HamburgerMenuProps): JSX.Element {
  const overlayRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   overlayRef.current?.addEventListener('click', () => {
  //     console.log('click');
  //     onClose();
  //   });
  // }, [onClose]);

  useEffect(() => {
    const keyDownFn = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      onClose();
    };

    document.body.addEventListener('keydown', keyDownFn);
    return () => document.body.removeEventListener('keydown', keyDownFn);
  }, [onClose]);

  return (
    <div className='modal-overlay' ref={overlayRef}>
      <div className='no-scrollbar absolute right-0 top-0 h-full w-96 animate-slide-left overflow-y-auto bg-white shadow-[-2px_0_2px_2px_rgba(0,0,0,0.05)]'>
        <div className='sticky top-0 bg-inherit'>
          <p className='border-b p-4 text-2xl font-bold text-gray-800'>Hey!</p>

          <div className='flex items-center justify-between p-4 leading-none shadow-md'>
            <img
              className='w-[40px]'
              src='/images/hamburgerMenu/rewards-login.png'
              alt='rewards-img'
            />
            <p className='text-violet-500'>
              Unlock special offers & <br /> great benefits
            </p>
            <button
              className='rounded-lg border border-red-500 p-2 text-xs font-bold text-red-500'
              onClick={onOpenLoginModal}
            >
              Login / Register
            </button>
          </div>
        </div>

        <HamburgerMenuList />
      </div>
    </div>
  );
}

export default HamburgerMenu;
