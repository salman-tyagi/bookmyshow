import { useState } from 'react';

import { MdOutlineClose } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';

import EmailLogin from './EmailLogin';
import Modal from '../ui/Modal';

interface LoginProps {
  onShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({ onShow }: LoginProps): JSX.Element {
  const [showContinue, setShowContinue] = useState(false);
  const [showEmailLogin, setShowEmailLogin] = useState(false);

  const showContinueBtnHandler = (): void => {
    setShowContinue(true);
  };

  const showEmailLoginHandler = (): void => {
    setShowEmailLogin(true);
  };

  const submitHandler = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <>
      {showEmailLogin ? (
        <Modal>
          <EmailLogin setShowEmailLogin={setShowEmailLogin} />
        </Modal>
      ) : (
        <Modal open={showEmailLogin} onClose={() => onShow(false)}>
          <form className='w-[26rem] p-10 text-center' onSubmit={submitHandler}>
            <h3 className='mb-8 w-full text-lg font-bold capitalize text-gray-800'>
              Get started
            </h3>

            <MdOutlineClose
              className='absolute right-6 top-4 cursor-pointer text-2xl text-gray-500 hover:text-gray-700'
              onClick={() => onShow(false)}
            />

            <div className='relative mb-4 cursor-pointer rounded border border-gray-400 px-3 py-3 text-sm font-semibold transition-all hover:border-gray-200 hover:bg-gray-100'>
              <img
                className='absolute left-5 top-1/2 inline-block -translate-y-1/2'
                src='/images/googlelogo.svg'
                alt='google-logo'
              />
              <span>Continue with Google</span>
            </div>

            <div
              className='relative mb-4 cursor-pointer rounded border border-gray-400 px-3 py-3 text-sm font-semibold transition-all hover:border-gray-200 hover:bg-gray-100'
              onClick={showEmailLoginHandler}
            >
              <img
                className='absolute left-5 top-1/2 inline-block -translate-y-1/2'
                src='/images/email.svg'
                alt='email-logo'
              />
              <span>Continue with Email</span>
            </div>

            <div className='relative mb-4 cursor-pointer rounded border border-gray-400 px-3 py-3 text-sm font-semibold transition-all hover:border-gray-200 hover:bg-gray-100'>
              <FaApple
                className='absolute left-5 top-1/2 inline-block -translate-y-1/2'
                size={22}
              />
              <span>Continue with Apple</span>
            </div>

            <p className='mb-5 text-sm uppercase'>Or</p>

            <div className='mb-24 flex gap-3 py-6'>
              <span className='pb-1 text-sm'>+91</span>
              <input
                className='w-full border-b border-gray-300 pb-1 text-sm outline-none focus:border-rose-400'
                type='number'
                placeholder='Continue with mobile number'
                onClick={showContinueBtnHandler}
              />
            </div>

            {!showContinue ? (
              <p className='text-xs font-medium text-gray-500'>
                I agree to the{' '}
                <span className='cursor-pointer underline'>
                  Terms & Conditions
                </span>{' '}
                &{' '}
                <span className='cursor-pointer underline'>Privacy Policy</span>
              </p>
            ) : (
              <button className='text-md w-full rounded-lg bg-rose-400 py-2 font-semibold text-white transition-all hover:bg-rose-500 active:bg-rose-400'>
                Continue
              </button>
            )}
          </form>
        </Modal>
      )}
    </>
  );
}

export default Login;
