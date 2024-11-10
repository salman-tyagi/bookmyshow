import { GoSearch } from 'react-icons/go';

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface SearchBarProps {
  placeholder: string;
  rounded?: Size;
  width?: number;
  text?: Size;
  bold?: 'base' | 'semibold' | 'medium' | 'bold';
}

const SearchBar = ({
  placeholder,
  rounded = 'md',
  width = 34.5,
  text = 'sm',
  bold = 'medium'
}: SearchBarProps): JSX.Element => {
  return (
    <form
      className={`flex items-center gap-4 rounded-${rounded} border bg-white px-3 py-2`}
      style={{ minWidth: `${width}rem` }}
    >
      <GoSearch className='text-gray-500' />

      <input
        className={`w-full text-${text} font-${bold} text-gray-500 outline-none`}
        type='text'
        placeholder={placeholder}
      />
    </form>
  );
};

export default SearchBar;
