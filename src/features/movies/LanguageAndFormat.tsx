import { useNavigate } from 'react-router-dom';

import CloseModalBtn from '../ui/CloseModalBtn';
import Modal from '../ui/Modal';

import { useReleaseMovie } from './hooks/useReleaseMovie';

import createSlug from '../utils/createSlug';
import { formatDate } from '../utils/helpers';

interface LanguageAndFormatProps {
  onClose(): void;
}

export default function LanguageAndFormat({
  onClose
}: LanguageAndFormatProps): JSX.Element {
  const { title, releaseDate, languages, screen } = useReleaseMovie();
  const navigate = useNavigate();

  const dateString = formatDate(releaseDate);
  const titleSlug = createSlug(title);

  const handleBuyTickets = (language: string, screen: string): void => {
    navigate(
      `/buytickets/${titleSlug}-${language}-${screen}?releaseDate=${dateString}`
    );
  };

  return (
    <Modal animation='animate-slide-top' onClose={onClose}>
      <div className='relative w-[22.5rem]'>
        <CloseModalBtn onClose={onClose} />

        <p className='px-4 pt-4 text-sm font-medium text-stone-800'>{title}</p>
        <p className='px-4 pb-3 text-lg font-semibold text-black'>
          Select language and format
        </p>

        {languages.map((language, i) => (
          <div key={i}>
            <p className='bg-stone-100 px-4 pt-4 pb-1 text-sm font-medium text-stone-600 uppercase'>
              {language.lang}
            </p>

            <div className='flex gap-4 px-4 py-4'>
              {screen.map((scr, i) => (
                <p
                  className='cursor-pointer rounded-2xl border border-stone-300 px-4 py-2 text-sm font-medium text-rose-600 uppercase'
                  key={i}
                  onClick={() => handleBuyTickets(language.lang, scr)}
                >
                  {scr}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
