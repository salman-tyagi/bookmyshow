import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoChevronBackOutline } from 'react-icons/io5';

import { login } from '../services/auth/login';

interface OTPLoginProps {
  showEmailLoginHandler: () => void;
}

interface FormValues {
  OTP: number;
}

const OTPLogin = ({ showEmailLoginHandler }: OTPLoginProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const OTPSubmitHandler = async (data: FormValues): Promise<void> => {
    const email = localStorage.getItem('email');

    if (!email) {
      toast.error('Email is required');
      return;
    }

    const res = await login({ ...data, email });

    if (res?.status !== 'success') {
      toast.error('Failed to login', { id: 'failed' });
      return;
    }

    localStorage.setItem('token', JSON.stringify(res?.token));
    toast.success('Login successfully');
  };

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

      <p className='mb-10 text-sm'>Enter OTP sent to USER_EMAIL</p>

      <input
        type='number'
        className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none'
        {...register('OTP', { required: 'OTP is required', maxLength: 6 })}
      />
      {errors.OTP && (
        <p className='text-xs text-red-500'>{errors.OTP.message}</p>
      )}

      <button className='text-md mt-auto w-full rounded-lg bg-rose-400 py-2 font-semibold text-white transition-all hover:bg-rose-500 active:bg-rose-400'>
        Continue
      </button>
    </form>
  );
};

export default OTPLogin;
