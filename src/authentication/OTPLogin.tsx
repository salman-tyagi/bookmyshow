import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoChevronBackOutline } from 'react-icons/io5';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';

import { login } from '../services/auth/login';

interface OTPLoginProps {
  showEmailLoginHandler: () => void;
  onClose(): void;
}

interface FormValues {
  OTP: number;
}

const OTPLogin = ({
  showEmailLoginHandler,
  onClose
}: OTPLoginProps): JSX.Element => {
  const [seconds, setSeconds] = useState(30);
  const { email } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setFocus
  } = useForm<FormValues>();

  const watchOTP = watch('OTP');
  const OTPlength = watchOTP?.toString().length;

  const OTPSubmitHandler = async (formData: FormValues): Promise<void> => {
    try {
      if (!email) {
        toast.error('Email is required');
        return;
      }

      const data = await dispatch(login({ ...formData, email }));

      if (!data.payload) {
        toast.error(data.error.message, { id: 'failed' });
        return;
      }

      toast.success('Logged in successfully');
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setFocus('OTP');
  }, [setFocus]);

  useEffect(() => {
    if (seconds === 0) return;

    const interval = setInterval(() => {
      setSeconds(seconds => --seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <form
      className={`mx-auto flex h-[557px] w-[27rem] flex-col rounded-lg bg-white p-8`}
      onSubmit={handleSubmit(OTPSubmitHandler)}
    >
      <IoChevronBackOutline
        className='mb-12 cursor-pointer text-2xl'
        onClick={showEmailLoginHandler}
      />

      <h3 className='text-2xl font-bold text-gray-700'>
        Verify your Email Address
      </h3>

      <p className='mb-6 text-sm'>
        Enter OTP sent to <span className='font-semibold'>{email}</span>
      </p>

      <input
        type='number'
        className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none'
        {...register('OTP', {
          required: 'OTP is required',
          minLength: 6,
          maxLength: 6
        })}
      />
      {errors.OTP && (
        <p className='text-xs text-red-500'>{errors.OTP.message}</p>
      )}

      <div className='mt-auto'>
        {seconds !== 0 ? (
          <p className='mb-3 text-center text-sm'>
            Expect OTP in <span className='font-medium'>{seconds} </span>
            seconds
          </p>
        ) : (
          <p className='mb-3 text-center text-sm'>
            Didn't receive OTP?{' '}
            <span className='cursor-pointer font-medium text-red-500'>
              Resend OTP
            </span>
          </p>
        )}

        <button
          className='text-md w-full rounded-lg bg-rose-500 py-2 font-semibold text-white transition-all hover:bg-rose-600 active:bg-rose-500 disabled:bg-rose-100'
          disabled={OTPlength !== 6}
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default OTPLogin;
