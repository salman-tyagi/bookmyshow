import { useState } from 'react';

import styles from './Login.module.css';

interface LoginProps {
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({ setShowLoginModal }: LoginProps): JSX.Element {
  const [showContinue, setShowContinue] = useState(false);

  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <div className=''>
      <form
        className={`${styles.loginForm} mx-auto w-[27rem] rounded-lg bg-white p-8 text-center`}
        onSubmit={submitHandler}
      >
        <div className='mb-8 flex'>
          <h3 className='w-full text-lg font-bold text-gray-800'>
            Get started
          </h3>
          <span
            className='cursor-pointer text-2xl text-gray-500 hover:text-gray-700'
            onClick={() => setShowLoginModal(false)}
          >
            &times;
          </span>
        </div>

        <div className='mb-6 flex flex-col gap-4 text-sm font-semibold'>
          <div className='cursor-pointer rounded border border-gray-400 px-3 py-3 transition-all hover:border-gray-200 hover:bg-gray-100'>
            Continue with Google
          </div>

          <div className='cursor-pointer rounded border border-gray-400 px-3 py-3 transition-all hover:border-gray-200 hover:bg-gray-100'>
            Continue with Email
          </div>

          <div className='cursor-pointer rounded border border-gray-400 px-3 py-3 transition-all hover:border-gray-200 hover:bg-gray-100'>
            Continue with Apple
          </div>
        </div>

        <p className='mb-5 text-sm uppercase'>Or</p>

        <div className='mb-24 flex gap-3 py-6'>
          <span className='pb-1 text-sm'>+91</span>
          <input
            className='w-full border-b border-gray-300 pb-1 text-sm outline-none focus:border-rose-400'
            type='number'
            placeholder='Continue with mobile number'
            onClick={() => setShowContinue(true)}
          />
        </div>

        {!showContinue ? (
          <p className='text-xs font-medium text-gray-500'>
            I agree to the{' '}
            <span className='cursor-pointer underline'>Terms & Conditions</span>{' '}
            & <span className='cursor-pointer underline'>Privacy Policy</span>
          </p>
        ) : (
          <button className='text-md w-full rounded-lg bg-rose-400 py-2 font-semibold text-white transition-all hover:bg-rose-500 active:bg-rose-400'>
            Continue
          </button>
        )}
      </form>
    </div>
  );
}

export default Login;
