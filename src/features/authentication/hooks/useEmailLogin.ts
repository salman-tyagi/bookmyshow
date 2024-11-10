import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { apiSignup } from '../services/apiSignup';

import { setItem } from '../../utils/localStorage';

interface FormValues {
  email: string;
}

const useEmailLogin = () => {
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

  const emailLoginHandler = async (data: FormValues): Promise<void> => {
    const res = await apiSignup(data);

    if (!res) {
      toast.error('Failed to create account', { id: 'failed' });
      return;
    }

    if (res instanceof Error) {
      toast.error(res.message);
      return;
    }

    setItem('email', res.email);
    toast.success(res.message, { id: 'succeed' });

    setShowOTP(true);
    return;
  };

  const handleReset = (): void => {
    reset();
  };

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return {
    showOTP,
    register,
    errors,
    handleSubmit,
    handleReset,
    validEmail,
    isValid,
    emailLoginHandler
  };
};

export default useEmailLogin;
