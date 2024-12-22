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
  const { title, releaseDate, languageAndScreen } = useReleaseMovie();
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

        {Object.entries(languageAndScreen).map(([language, screens], i) => {
          return (
            <div key={i}>
              <p className='bg-stone-100 p-4 pb-1 text-sm font-medium text-stone-600 uppercase'>
                {language}
              </p>

              <ul className='flex gap-4 p-4'>
                {Array.from(new Set(screens)).map((screen, i) => (
                  <li key={i}>
                    <p
                      className='cursor-pointer rounded-2xl border border-stone-300 px-4 py-2 text-sm font-medium text-rose-600 uppercase'
                      key={i}
                      onClick={() => handleBuyTickets(language, screen)}
                    >
                      {screen}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
