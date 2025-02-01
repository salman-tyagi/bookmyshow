import Modal from '../ui/Modal';

interface SelectSeatsProps {
  onClose(): void;
  numSeats: number;
  onSelectSeats(numSeats: number): void;
}

function SelectSeats({
  onClose,
  numSeats,
  onSelectSeats
}: SelectSeatsProps): JSX.Element {
  return (
    <Modal onClose={onClose} animation=''>
      <div className='px-10 py-5'>
        <p className='text-center text-lg font-medium text-stone-800'>
          How many seats?
        </p>

        <div className='my-16 text-center'>
          <img
            className='inline-block w-[30%]'
            src='/images/Screenshot from 2025-02-01 18-11-36.png'
            alt=''
          />
        </div>

        <ul className='flex items-center justify-center gap-3'>
          {Array.from({ length: 10 }, (_, i) => i + 1).map(seat => (
            <li
              key={seat}
              className={`${
                seat === numSeats
                  ? 'pointer-events-none bg-rose-500 text-white'
                  : 'cursor-pointer hover:bg-rose-500 hover:text-white'
              } grid h-8 w-8 place-items-center rounded-full transition delay-75 ease-out`}
              onClick={() => onSelectSeats(seat)}
            >
              {seat}
            </li>
          ))}
        </ul>

        <div className='my-6 border border-b-stone-200' />

        <div className='flex items-center justify-center gap-6 text-center text-sm font-medium'>
          <div>
            <p className='text-stone-700'>PRIME</p>
            <p>Rs. 100</p>
            <p className='text-xs text-green-400'>Available</p>
          </div>
          <div>
            <p className='text-stone-700'>CLASSIC</p>
            <p>Rs. 100</p>
            <p className='text-xs text-green-400'>Available</p>
          </div>
        </div>

        <button className='btn mt-4' onClick={onClose}>
          Select Seats
        </button>
      </div>
    </Modal>
  );
}

export default SelectSeats;
