import { MovieReview } from './services/apiReleases';
import { IoShareSocialOutline } from 'react-icons/io5';

interface MovieReviewItemProps {
  review: MovieReview;
}

function MovieReviewItem({
  review: { email, rating, review, createdAt }
}: MovieReviewItemProps) {
  return (
    <li className='min-w-[28rem] rounded border border-stone-300 px-6 py-8'>
      <div className='mb-8 flex items-center gap-3'>
        <div className='h-10 w-10 rounded-full bg-stone-100'>
          <img src='/images/default-photo.webp' alt={`${email} photo`} />
        </div>

        <div>
          <p>{email}</p>
          <p className='text-sm'>
            Booked on <span className='text-red-600'>bookmyshow</span>
          </p>
        </div>
        <p className='ml-auto'>{rating}/10</p>
      </div>

      <p className='mb-4'>{review}</p>

      <div className='flex items-center gap-4'>
        <time className='ml-auto'>
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
