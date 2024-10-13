import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoChevronForward } from 'react-icons/io5';
import { CiLock } from 'react-icons/ci';
import { CiSettings } from 'react-icons/ci';
import { HiOutlineGift } from 'react-icons/hi2';

const hamMenuList = [
  {
    icon: <IoMdNotificationsOutline size={22} />,
    desc: 'Notifications',
    btn: <IoChevronForward />
  },
  {
    icon: '/images/hamburgerMenu/purchase-history.png',
    desc: 'Your orders',
    btn: <IoChevronForward />
  },
  {
    icon: '/images/hamburgerMenu/stream-library.png',
    desc: 'Stream library',
    btn: <CiLock />
  },
  {
    icon: '/images/hamburgerMenu/play-credit-card.png',
    desc: 'Play credit card',
    btn: <IoChevronForward />
  },
  {
    icon: '/images/hamburgerMenu/help-and-support.png',
    desc: 'Help & support',
    btn: <IoChevronForward />
  },
  {
    icon: <CiSettings size={22} />,
    desc: 'Account & settings',
    btn: <IoChevronForward />
  },
  {
    icon: <HiOutlineGift size={22} />,
    desc: 'Rewards',
    btn: <IoChevronForward />
  },
  {
    icon: '/images/hamburgerMenu/book-a-change.png',
    desc: 'BookAChange',
    btn: <IoChevronForward />
  }
];

function HamburgerMenu(): JSX.Element {
  return (
    <div className='no-scrollbar animate-slide-left absolute right-0 top-0 h-full w-96 overflow-y-auto bg-white shadow-[-2px_0_2px_2px_rgba(0,0,0,0.05)]'>
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
          <button className='rounded-lg border border-red-500 p-2 text-xs font-bold text-red-500'>
            Login / Register
          </button>
        </div>
      </div>

      <ul>
        {hamMenuList.map(menu => (
          <li
            key={menu.desc}
            className='flex cursor-pointer items-center gap-4 border-b p-4 hover:bg-gray-100'
          >
            {typeof menu.icon === 'string' ? (
              <img
                className='w-[20px]'
                src={`${menu.icon}`}
                alt={`${menu.desc}-img`}
              />
            ) : (
              <span>{menu.icon}</span>
            )}
            <p>{menu.desc}</p>
            <span className='ml-auto'>{menu.btn}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HamburgerMenu;
