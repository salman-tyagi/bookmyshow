import { useNavigate, useRouteError } from 'react-router-dom';

interface ErrorPageProps {
  message?: string;
}

interface IError extends Error {
  data: string;
}

function ErrorPage({ message = '' }: ErrorPageProps): JSX.Element {
  const error = useRouteError() as IError;
  const navigate = useNavigate();

  return (
    <div className='h-screen bg-stone-100 py-6 text-center'>
      <p className='text-xl'>
        <span className='font-bold text-red-600'>Error: </span>
        <span className='underline'>
          {message || error.message || error.data}
        </span>
      </p>

      <button
        className='mt-4 cursor-pointer rounded bg-rose-500 px-5 py-1 font-medium text-white hover:underline'
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
}

export default ErrorPage;
