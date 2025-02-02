import { useState } from 'react';

import Modal from '../ui/Modal';

interface SelectSeatsProps {
  onClose(): void;
  numSeats: number;
  onSelectSeats(numSeats: number): void;
  price: { [key: string]: number };
}

const seatFor1 = '/images/seat-for-1.png';
const seatFor2 = '/images/seat-for-2.png';
const seatFor3 = '/images/seat-for-3.png';
const seatFor4 = '/images/seat-for-4.png';
const seatFor7 = '/images/seat-for-7.png';
const seatFor10 = '/images/seat-for-10.png';

// prettier-ignore
const imagesSeat: string[] = [seatFor1, seatFor2, seatFor3, seatFor4, seatFor7, seatFor7, seatFor7, seatFor10, seatFor10, seatFor10];

function SelectSeats({
  onClose,
  numSeats,
  onSelectSeats,
  price
}: SelectSeatsProps): JSX.Element {
  const [numSeatImage, setNumSeatImage] = useState(numSeats - 1);

  return (
    <Modal onClose={onClose} animation=''>
      <div className='px-10 py-5'>
        <p className='text-center text-lg font-medium text-stone-800'>
          How many seats?
        </p>

        <div className='my-16 text-center'>
          <img
            className='inline-block w-[28%]'
            src={imagesSeat[numSeatImage]}
            alt='seat-image'
          />
        </div>

        <ul className='flex items-center justify-center gap-3'>
          {Array.from({ length: 10 }, (_, i) => i + 1).map(seat => (
            <li
              key={seat}
              className={`${
                seat === numSeats ? 'bg-rose-500 text-white' : ''
              } grid h-8 w-8 cursor-pointer place-items-center rounded-full transition delay-75 ease-out hover:bg-rose-500 hover:text-white`}
              onClick={() => onSelectSeats(seat)}
              onMouseEnter={() => setNumSeatImage(seat - 1)}
              onMouseLeave={() => setNumSeatImage(numSeats - 1)}
            >
              {seat}
            </li>
          ))}
        </ul>

        <div className='my-6 border border-b-stone-200' />

        <div className='flex items-center justify-center gap-6 text-center text-sm'>
          {Object.entries(price).map(([seatType, price], i) => (
            <div key={i}>
              <p className='text-stone-600'>{seatType.replace(seatType[0], seatType[0].toUpperCase())}</p>
              <p className='font-medium'>Rs. {price}</p>
              <p className='text-xs text-green-400'>Available</p>
            </div>
          ))}
        </div>

        <button className='btn mt-4' onClick={onClose}>
          Select Seats
        </button>
      </div>
    </Modal>
  );
}

export default SelectSeats;
