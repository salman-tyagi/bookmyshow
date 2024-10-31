import { GoSearch } from 'react-icons/go';

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface SearchBarProps {
  placeholder: string;
  rounded?: Size;
  width?: string;
  text?: Size;
  boldness?: 'semibold' | 'medium' | 'bold';
}

const SearchBar = ({
  placeholder,
  rounded,
  width,
  text,
  boldness
}: SearchBarProps): JSX.Element => {
  return (
    <form
      className={`flex w-[${width}] items-center gap-4 rounded-${rounded} border bg-white px-3 py-2`}
    >
      <GoSearch className='text-gray-500' />

      <input
        className={`w-full text-${text} font-${boldness} text-gray-500 outline-none`}
        type='text'
        placeholder={placeholder}
      />
    </form>
  );
};

export default SearchBar;
