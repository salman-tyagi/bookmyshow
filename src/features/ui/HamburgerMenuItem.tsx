import { CiLock } from 'react-icons/ci';
import { IoChevronForward } from 'react-icons/io5';
import { useAppSelector } from '../hooks/hooks';

interface HamburgerMenuItemProps {
  menu: {
    icon: JSX.Element | string;
    desc: string;
  };
  index: number;
}

const HamburgerMenuItem = ({
  menu: { icon, desc },
  index
}: HamburgerMenuItemProps): JSX.Element => {
  const { isAuthenticated } = useAppSelector(state => state.users);

  const lockedMenu =
    !isAuthenticated && (index === 1 || index === 2 || index === 5);

  return (
    <li
      className={`flex items-center gap-4 border-b p-4 ${lockedMenu ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-gray-100'}`}
    >
      {typeof icon === 'string' ? (
        <img className='w-[20px]' src={`${icon}`} alt={`${desc}-img`} />
      ) : (
        <span>{icon}</span>
      )}
      <p>{desc}</p>
      <span className='ml-auto'>
        {lockedMenu ? <CiLock /> : <IoChevronForward />}
      </span>
    </li>
  );
};

export default HamburgerMenuItem;
