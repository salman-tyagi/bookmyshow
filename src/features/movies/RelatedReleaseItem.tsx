import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import { RelatedRelease } from './services/apiReleases';
import { useAppSelector } from '../hooks/hooks';

interface RelatedReleaseItemProps {
  relatedRelease: RelatedRelease;
}

function RelatedReleaseItem({
  relatedRelease: {
    movie: { title, image, ratingsAverage, votes, slug }
  }
}: RelatedReleaseItemProps): JSX.Element {
  const { storedCity } = useAppSelector(state => state.cities);

  return (
    <li className='min-w-56 max-w-56'>
      <Link to={`/${storedCity}/movies/${slug}`}>
        <div className='mb-2 overflow-hidden rounded-md'>
          <img src={`/images/${image}`} alt={`image of movie ${title}`} />
          <div className='flex items-center gap-2 bg-stone-900 px-3 py-1 font-medium text-white'>
            <FaStar size={17} className='text-rose-500' />
            <span>{ratingsAverage}/10</span>
            <span>{votes} Votes</span>
          </div>
        </div>

        <p className='text-lg font-semibold text-black'>{title}</p>
      </Link>
    </li>
  );
}

export default RelatedReleaseItem;
