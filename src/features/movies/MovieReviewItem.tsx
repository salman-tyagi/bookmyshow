import { MovieReview } from './services/apiReleases';
import { Link } from 'react-router-dom';

import { IoShareSocialOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegThumbsDown } from 'react-icons/fa';

interface MovieReviewItemProps {
  review: MovieReview;
}

const LETTER_COUNT = 160;

function MovieReviewItem({
  review: { email, rating, review, createdAt }
}: MovieReviewItemProps) {
  return (
    <li className='min-w-[28rem] rounded border border-stone-300 p-6'>
      <div className='mb-8 flex items-center gap-3'>
        <div className='h-10 w-10 rounded-full bg-stone-100'>
          <img src='/images/default-photo.webp' alt={`${email} photo`} />
        </div>

        <div className='font-medium'>
          <p>{email.split('@').at(0)}</p>
          <p className='space-x-2 text-stone-500'>
            <span className='text-sm'>Booked on</span>
            <img
              className='inline-block max-h-5'
              src='/images/logo.svg'
              alt='book-my-show-logo'
            />
          </p>
        </div>

        <p className='ml-auto inline-flex items-center gap-1'>
          <FaStar className='inline-block text-2xl text-rose-400' />
          <span className='font-medium'>{rating}/10</span>
        </p>
      </div>

      <p className='mb-3 min-h-24 font-medium text-stone-500'>
        {review.length > LETTER_COUNT ? (
          <>
            {review.slice(0, LETTER_COUNT)}
            <Link to='' className='text-sm text-rose-500'>
              {' '}
              ...more
            </Link>
          </>
        ) : (
          review
        )}
      </p>

      <div className='flex items-center gap-5 text-stone-600'>
        <div className='space-x-1'>
          <FaRegThumbsUp className='inline-block' />
          <span className='text-sm font-medium'>427</span>
        </div>

        <div className='space-x-1'>
          <FaRegThumbsDown className='inline-block' />
          <span className='font-medium'>0</span>
        </div>

        <time className='ml-auto font-medium text-stone-400'>
          {new Date(createdAt)
            .toLocaleDateString('en-IN', {
              year: '2-digit',
              month: 'short',
              day: '2-digit'
            })
            .replaceAll(' ', '-')}
        </time>

        <IoShareSocialOutline size={22} />
      </div>
    </li>
  );
}

export default MovieReviewItem;
