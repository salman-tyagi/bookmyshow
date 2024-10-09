import { SetStateAction, useState } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

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
    formState: { errors }
  } = useForm<FormValues>();

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
  };

  return (
    <>
      {showOTP ? (
        <OTPLogin showEmailLoginHandler={showEmailLoginHandler} />
      ) : (
        <form
          className={`mx-auto w-[27rem] rounded-lg bg-white p-8`}
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

              <input
                id='email'
                type='email'
                className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none'
                {...register('email', {
                  required: 'Email is required',
                  maxLength: 30
                })}
              />

              {errors.email && (
                <p className='mt-1 text-xs text-red-600'>
                  {errors.email.message}
                </p>
              )}
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
