import { SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { IoChevronBackOutline } from 'react-icons/io5';

import OTPLogin from './OTPLogin';

import { signup } from '../services/auth/signup';

interface EmailLoginProps {
  setShowEmailLogin: React.Dispatch<SetStateAction<boolean>>;
}

interface FormValues {
  email: string;
}

const EmailLogin = ({ setShowEmailLogin }: EmailLoginProps): JSX.Element => {
  const [showOTP, setShowOTP] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
    reset,
    setFocus
  } = useForm<FormValues>();

  const isEmailDirty = dirtyFields.email || false;
  const validEmail = isEmailDirty && !isValid;

  const showEmailLoginHandler = (): void => {
    setShowEmailLogin(false);
  };

  const emailLoginHandler = async (data: FormValues): Promise<void> => {
    const res = await signup(data);

    if (res?.status !== 'success') {
      toast.error('Failed to create account!', { id: 'failed' });
      return;
    }

    toast.success(res.message);
    setShowOTP(true);
    return;
  };

  const handleReset = (): void => {
    reset();
  };

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <>
      {showOTP ? (
        <OTPLogin showEmailLoginHandler={showEmailLoginHandler} />
      ) : (
        <form
          className='w-[26rem] p-10'
          onSubmit={handleSubmit(emailLoginHandler)}
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

              <div className='relative'>
                <input
                  id='email'
                  className={`text-md w-full rounded-md border border-gray-300 px-3 py-2 outline-none ${validEmail && 'border-red-600'} leading-none`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid Email'
                    },
                    maxLength: 30
                  })}
                />

                {validEmail && (
                  <button
                    className='absolute right-2 top-1/2 -translate-y-1/2 text-3xl font-extralight leading-none'
                    onClick={handleReset}
                  >
                    &times;
                  </button>
                )}
              </div>

              {errors.email && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.email.message}
                </p>
              )}

              {validEmail && (
                <p className='mt-1 text-sm text-red-600'>Invalid Email</p>
              )}
            </div>

            <button
              className='text-md mt-auto w-full rounded-lg bg-rose-400 py-2 font-semibold text-white transition-all hover:bg-rose-500 active:bg-rose-400 disabled:bg-stone-300'
              disabled={!isValid}
            >
              Continue
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default EmailLogin;
