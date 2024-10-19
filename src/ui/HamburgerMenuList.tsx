import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoChevronForward } from 'react-icons/io5';
import { CiLock } from 'react-icons/ci';
import { CiSettings } from 'react-icons/ci';
import { HiOutlineGift } from 'react-icons/hi2';

import HamburgerMenuItem from './HamburgerMenuItem';

const menuList = [
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

const HamburgerMenuList = (): JSX.Element => {
  return (
    <ul>
      {menuList.map(menu => (
        <HamburgerMenuItem key={menu.desc} menu={menu} />
      ))}
    </ul>
  );
};

export default HamburgerMenuList;
