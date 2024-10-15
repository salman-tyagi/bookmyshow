import { GoSearch } from 'react-icons/go';

const SearchBar = ({ placeholder }: { placeholder: string }): JSX.Element => {
  return (
    <div
      className={`flex w-[34.5rem] items-center gap-4 rounded-md border bg-white px-3 py-2`}
    >
      <GoSearch className='text-gray-500' />

      <input
        className='w-full text-[1.4rem] text-sm font-medium text-gray-500 outline-none'
        type='text'
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
