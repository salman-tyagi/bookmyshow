import { IoMdNotificationsOutline } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';
import { HiOutlineGift } from 'react-icons/hi2';

import HamburgerMenuItem from './HamburgerMenuItem';

const menuList = [
  {
    icon: <IoMdNotificationsOutline size={22} />,
    desc: 'Notifications'
  },
  {
    icon: '/images/hamburgerMenu/purchase-history.png',
    desc: 'Your orders'
  },
  {
    icon: '/images/hamburgerMenu/stream-library.png',
    desc: 'Stream library'
  },
  {
    icon: '/images/hamburgerMenu/play-credit-card.png',
    desc: 'Play credit card'
  },
  {
    icon: '/images/hamburgerMenu/help-and-support.png',
    desc: 'Help & support'
  },
  {
    icon: <CiSettings size={22} />,
    desc: 'Account & settings'
  },
  {
    icon: <HiOutlineGift size={22} />,
    desc: 'Rewards'
  },
  {
    icon: '/images/hamburgerMenu/book-a-change.png',
    desc: 'BookAChange'
  }
];

const HamburgerMenuList = (): JSX.Element => {
  return (
    <ul>
      {menuList.map((menu, i) => (
        <HamburgerMenuItem index={i} key={menu.desc} menu={menu} />
      ))}
    </ul>
  );
};

export default HamburgerMenuList;
