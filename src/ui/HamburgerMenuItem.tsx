interface HamburgerMenuItemProps {
  menu: {
    icon: JSX.Element | string;
    desc: string;
    btn: JSX.Element;
  };
}

const HamburgerMenuItem = ({
  menu: { icon, desc, btn }
}: HamburgerMenuItemProps): JSX.Element => {
  return (
    <li className='flex cursor-pointer items-center gap-4 border-b p-4 hover:bg-gray-100'>
      {typeof icon === 'string' ? (
        <img className='w-[20px]' src={`${icon}`} alt={`${desc}-img`} />
      ) : (
        <span>{icon}</span>
      )}
      <p>{desc}</p>
      <span className='ml-auto'>{btn}</span>
    </li>
  );
};

export default HamburgerMenuItem;
