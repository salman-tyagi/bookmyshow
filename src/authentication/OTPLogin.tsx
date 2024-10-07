import { IoChevronBackOutline } from 'react-icons/io5';

interface OTPLoginProps {
  showEmailLoginHandler: () => void;
}

const OTPLogin = ({ showEmailLoginHandler }: OTPLoginProps): JSX.Element => {
  const OTPSubmitHandler = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    console.log('OTP submitted');
  };

  return (
    <form
      className={`mx-auto flex h-[557px] w-[27rem] flex-col rounded-lg bg-white p-8`}
      onSubmit={OTPSubmitHandler}
    >
      <IoChevronBackOutline
        className='mb-12 cursor-pointer text-2xl'
        onClick={showEmailLoginHandler}
      />

      <h3 className='text-2xl font-bold text-gray-700'>
        Verify your Email Address
      </h3>

      <p className='mb-10 text-sm'>Enter OTP sent to USER_EMAIL</p>

      <input
        type='number'
        className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none'
      />

      <button className='text-md mt-auto w-full rounded-lg bg-rose-400 py-2 font-semibold text-white transition-all hover:bg-rose-500 active:bg-rose-400'>
        Continue
      </button>
    </form>
  );
};

export default OTPLogin;
