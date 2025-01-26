import { useLocation, useNavigate } from 'react-router-dom';

function SeatLayout(): JSX.Element {
  const navigate = useNavigate();
  const { state: { title, theatre, timing } } = useLocation();
  console.log(title, theatre, timing);

  return (
    <div>
      <header className='flex items-center gap-3'>
        <div></div>

        <div>
          <div className='flex items-center gap-2'>
            <p>{title}</p>
            <span>U</span>
          </div>

          <div className='flex items-center gap-2'>
            <p>{theatre}</p>
            <span>|</span>
            <time>Tomorrow, {timing}</time>
          </div>
        </div>

        <button className='ml-auto'>2 Tickets [pencil]</button>

        <span className='ml-10 inline-block' onClick={() => navigate(-1)}>
          &times;
        </span>
      </header>
    </div>
  );
}

export default SeatLayout;
