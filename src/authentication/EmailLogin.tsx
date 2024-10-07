import { SetStateAction, useState } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';

import OTPLogin from './OTPLogin';

interface EmailLoginProps {
  setShowEmailLogin: React.Dispatch<SetStateAction<boolean>>;
}

const EmailLogin = ({ setShowEmailLogin }: EmailLoginProps): JSX.Element => {
  const [showOTP, setShowOTP] = useState(false);

  const showEmailLoginHandler = (): void => {
    setShowEmailLogin(false);
  };

  const submitEmailHandler = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    console.log('email submitted');
    setShowOTP(true);
  };

  return (
    <>
      {showOTP ? (
        <OTPLogin showEmailLoginHandler={showEmailLoginHandler} />
      ) : (
        <form
          className={`mx-auto w-[27rem] rounded-lg bg-white p-8`}
          onSubmit={submitEmailHandler}
        >
          <IoChevronBackOutline
            className='mb-12 cursor-pointer text-2xl'
            onClick={showEmailLoginHandler}
          />

          <div className='flex h-[409px] flex-col gap-8'>
            <h3 className='text-2xl font-bold text-gray-700'>
              Login with Email
            </h3>

            <div>
              <label htmlFor='email' className='mb-1 text-sm'>
                Email
              </label>
              <input
                id='email'
                type='email'
                className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none'
              />
            </div>

            <button className='text-md mt-auto w-full rounded-lg bg-rose-400 py-2 font-semibold text-white transition-all hover:bg-rose-500 active:bg-rose-400'>
              Continue
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default EmailLogin;
