import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import LanguageAndFormat from '../movies/LanguageAndFormat';
import BuyOrRent from '../movies/BuyOrRent';
import Spinner from '../ui/Spinner';
import RateMovie from '../movies/RateMovie';
import AboutMovie from '../movies/AboutMovie';
import MovieCast from '../movies/MovieCast';
import MovieCrew from '../movies/MovieCrew';
import MovieReviews from '../movies/MovieReviews';
import RelatedReleases from '../movies/RelatedReleases';

import { useReleaseMovie } from '../movies/hooks/useReleaseMovie';

export default function Movie(): JSX.Element {
  const [showLanguageAndFormat, setShowLanguageAndFormat] = useState(false);
  const [showBuyOrRent, setShowBuyOrRent] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const buyRef = useRef<HTMLButtonElement>(null);

  // prettier-ignore
  const { isLoading, poster, image, title, screens, languages, durationInHours, durationInMins, genres, certification, releaseDate } = useReleaseMovie();

  useEffect(() => {
    const header = buyRef.current;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          // TODO:
          if (!entry.isIntersecting) setShowHeader(true);
          else setShowHeader(false);
        });
      },
      {
        root: null,
        rootMargin: '22px',
        threshold: 1
      }
    );

    if (header) observer.observe(header);

    return () => {
      if (header) observer.unobserve(header);
    };
  });

  if (isLoading) return <Spinner width={38} />;

  return (
    <>
      {showHeader && (
        <header className='animate-overlay-smooth fixed top-0 flex w-full items-center justify-between bg-white px-36 py-5 shadow-md'>
          <p className='text-2xl font-black'>{title}</p>
          <button className='rounded-lg bg-rose-500 px-14 py-3 font-semibold text-white'>
            Book tickets
          </button>
        </header>
      )}

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

          <p className='pt-2 pb-1 text-sm'>
            In cinemas <span className='text-xs'>&bull;</span> Streaming now
          </p>
        </div>

        <div className='w-[32rem]'>
          <p className='mb-5 text-4xl font-bold'>{title}</p>

          <RateMovie />

          {screens.length && (
            <ul className='mb-2 flex w-fit space-x-1 rounded-sm bg-stone-200 p-2 font-medium text-stone-800'>
              {screens.map(screen => (
                <li key={screen.id} className='uppercase hover:underline'>
                  <Link to={screen.link}>{screen.scr},</Link>
                </li>
              ))}
            </ul>
          )}

          {languages.length && (
            <ul className='mb-5 flex w-fit space-x-1 rounded-sm bg-stone-200 px-2 py-1 font-medium text-stone-800'>
              {languages.map(lang => (
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

            <p>{genres}</p>

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
              ref={buyRef}
              className='w-52 rounded-md bg-rose-500 px-2 py-3 font-semibold text-white hover:bg-rose-600 active:bg-rose-500'
              onClick={() => setShowBuyOrRent(true)}
            >
              Buy or Rent
            </button>
          </div>
        </div>
      </section>

      {showLanguageAndFormat && (
        <LanguageAndFormat onClose={() => setShowLanguageAndFormat(false)} />
      )}

      {showBuyOrRent && <BuyOrRent onClose={() => setShowBuyOrRent(false)} />}

      <AboutMovie />
      <MovieCast />
      <MovieCrew />
      <MovieReviews />
      <RelatedReleases />
    </>
  );
}
