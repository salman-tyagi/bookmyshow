import { useRouteError } from 'react-router-dom';

interface IError extends Error {
  data: string;
}

function ErrorPage(): JSX.Element {
  const error = useRouteError() as IError;

  return (
    <div className='h-screen space-x-2 bg-stone-100 py-6 text-center'>
      <p className='text-xl'>
        <span className='font-bold text-red-600'>Oops!</span> *
        {error.message || error.data}*
      </p>
    </div>
  );
}

export default ErrorPage;
