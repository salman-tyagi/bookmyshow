import { useState } from 'react';

import { MdOutlineClose } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';

import EmailLogin from './EmailLogin';
import Modal from '../ui/Modal';

interface LoginProps {
  onClose(): void;
}

function SignIn({ onClose }: LoginProps): JSX.Element {
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [showContinue, setShowContinue] = useState(false);

  return (
    <Modal>
      {showEmailLogin ? (
        <EmailLogin
          onCloseSignInModal={onClose}
          setShowEmailLogin={setShowEmailLogin}
        />
      ) : (
        <form className='w-[26rem] p-10 text-center'>
          <h3 className='mb-8 w-full text-lg font-bold text-gray-800 capitalize'>
            Get started
          </h3>

          <MdOutlineClose
            className='absolute top-4 right-6 cursor-pointer text-2xl text-gray-500 hover:text-gray-700'
            onClick={onClose}
          />

          <div className='relative mb-4 cursor-pointer rounded-sm border border-gray-400 px-3 py-3 text-sm font-semibold transition-all hover:border-gray-200 hover:bg-gray-100'>
            <img
              className='absolute top-1/2 left-5 inline-block -translate-y-1/2'
              src='/images/googlelogo.svg'
              alt='google-logo'
            />
            <span>Continue with Google</span>
          </div>

          <div
            className='relative mb-4 cursor-pointer rounded-sm border border-gray-400 px-3 py-3 text-sm font-semibold transition-all hover:border-gray-200 hover:bg-gray-100'
            onClick={() => setShowEmailLogin(true)}
          >
            <img
              className='absolute top-1/2 left-5 inline-block -translate-y-1/2'
              src='/images/email.svg'
              alt='email-logo'
            />
            <span>Continue with Email</span>
          </div>

          <div className='relative mb-4 cursor-pointer rounded-sm border border-gray-400 px-3 py-3 text-sm font-semibold transition-all hover:border-gray-200 hover:bg-gray-100'>
            <FaApple
              className='absolute top-1/2 left-5 inline-block -translate-y-1/2'
              size={22}
            />
            <span>Continue with Apple</span>
          </div>

          <p className='mb-5 text-sm uppercase'>Or</p>

          <div className='mb-24 flex gap-3 py-6'>
            <span className='pb-1 text-sm'>+91</span>
            <input
              className='w-full border-b border-gray-300 pb-1 text-sm outline-hidden focus:border-rose-400'
              type='number'
              placeholder='Continue with mobile number'
              onClick={() => setShowContinue(true)}
            />
          </div>

          {!showContinue ? (
            <p className='text-xs font-medium text-gray-500'>
              I agree to the{' '}
              <span className='cursor-pointer underline'>
                Terms & Conditions
              </span>{' '}
              & <span className='cursor-pointer underline'>Privacy Policy</span>
            </p>
          ) : (
            <button className='text-md w-full rounded-lg bg-rose-400 py-2 font-semibold text-white transition-all hover:bg-rose-500 active:bg-rose-400'>
              Continue
            </button>
          )}
        </form>
      )}
    </Modal>
  );
}

export default SignIn;
