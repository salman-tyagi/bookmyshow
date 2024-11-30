import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../hooks/hooks';

import LanguageAndFormat from './LanguageAndFormat';
import BuyOrRent from './BuyOrRent';
import Spinner from '../ui/Spinner';
import RateMovie from './RateMovie';
import AboutMovie from './AboutMovie';

import { getRelease } from './services/apiReleases';

export default function Movie(): JSX.Element {
  const [showLanguageAndFormat, setShowLanguageAndFormat] = useState(false);
  const [showBuyOrRent, setShowBuyOrRent] = useState(false);
  const { slug } = useParams<{ slug: string }>();

  const { storedCity } = useAppSelector(state => state.cities);

  const { isLoading, data: release } = useQuery({
    queryKey: ['movie'],
    queryFn: () => getRelease(slug!)
  });

  if (isLoading) return <Spinner width={38} />;

  const {
    _id: releaseId = '',
    movie: {
      title = '',
      image = '',
      poster = '',
      duration = 0,
      certification = '',
      languages = [],
      genres = [],
      about = ''
    } = {},
    screen = [],
    releaseDate = ''
  } = release || {};

  const durationInHours = duration / 60;
  const durationInMins = duration % 60;

  const screens = screen.map(
    (scr, i): { id: number; scr: string; link: string } => {
      return {
        id: i,
        scr,
        link: `/explore/movies-${storedCity}-${scr}`
      };
    }
  );

  const _languages = languages.map((lang, i) => {
    return {
      id: i,
      lang: lang,
      link: `/explore/movies-${storedCity}-${lang}`
    };
  });

  const _genres = genres
    .map(genre => genre[0].toUpperCase() + genre.slice(1))
    .join(', ');

  return (
    <>
      <section
        className='flex h-[30rem] items-center gap-8 bg-black bg-right bg-no-repeat px-36 py-6 text-white'
        style={{
          backgroundImage: `linear-gradient(90deg, #1a1a1a 32%, #00000033 70%, #1a1a1a 98%), url(/images/${poster})`
        }}
      >
        <div className='max-w-64 overflow-clip rounded-md bg-black text-center text-sm font-semibold'>
          <img
            className='w-full'
            src={`/images/${image}`}
            alt={`${title}-image`}
          />

          <p className='pb-1 pt-2 text-sm'>
            In cinemas <span className='text-xs'>&bull;</span> Streaming now
          </p>
        </div>

        <div className='w-[32rem]'>
          <p className='mb-5 text-4xl font-bold'>{title}</p>

          <RateMovie ratings={8} votes={4} />

          {screens.length && (
            <ul className='mb-2 flex w-fit space-x-1 rounded bg-stone-200 p-2 font-medium text-stone-800'>
              {screens.map(screen => (
                <li key={screen.id} className='uppercase hover:underline'>
                  <Link to={screen.link}>{screen.scr},</Link>
                </li>
              ))}
            </ul>
          )}

          {_languages.length && (
            <ul className='mb-5 flex w-fit space-x-1 rounded bg-stone-200 px-2 py-1 font-medium text-stone-800'>
              {_languages.map(lang => (
                <li key={lang.id} className='capitalize hover:underline'>
                  <Link to={lang.link}>{lang.lang},</Link>
                </li>
              ))}
            </ul>
          )}

          <div className='mb-8 flex flex-wrap items-center gap-2 font-medium'>
            <p>
              <span>{Math.floor(durationInHours)}</span>h{' '}
              <span>{durationInMins}</span>m
            </p>

            <span className='text-xs'>&bull;</span>

            <p>{_genres}</p>

            <span className='text-xs'>&bull;</span>

            <p>{certification}</p>

            <span className='text-xs'>&bull;</span>

            <p>
              {new Date(releaseDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
              })}
            </p>
          </div>

          <div className='space-x-4'>
            <button
              className='w-52 rounded-md bg-rose-500 px-2 py-3 font-semibold text-white hover:bg-rose-600 active:bg-rose-500'
              onClick={() => setShowLanguageAndFormat(true)}
            >
              Book tickets
            </button>

            <button
              className='w-52 rounded-md bg-rose-500 px-2 py-3 font-semibold text-white hover:bg-rose-600 active:bg-rose-500'
              onClick={() => setShowBuyOrRent(true)}
            >
              Buy or Rent
            </button>
          </div>
        </div>
      </section>

      {showLanguageAndFormat && (
        <LanguageAndFormat
          movieData={{
            releaseId,
            title,
            languages: languages,
            screens: screen,
            releaseDate
          }}
          onClose={() => setShowLanguageAndFormat(false)}
        />
      )}

      {showBuyOrRent && <BuyOrRent onClose={() => setShowBuyOrRent(false)} />}

      <AboutMovie about={about} />
    </>
  );
}
