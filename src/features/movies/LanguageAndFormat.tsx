import { useNavigate } from 'react-router-dom';

import CloseModalBtn from '../ui/CloseModalBtn';
import Modal from '../ui/Modal';

import createSlug from '../utils/createSlug';

interface LanguageAndFormatProps {
  onClose(): void;
  movieData: {
    releaseId: string;
    title: string;
    languages: string[];
    screens: string[];
    releaseDate: string;
  };
}

export const formatDate = (date: string): string => {
  const dateString = new Intl.DateTimeFormat('en-IN')
    .format(new Date(date))
    .slice()
    .split('/')
    .map(item => item.padStart(2, '0'))
    .reverse()
    .join('');
  return dateString;
};

export default function LanguageAndFormat({
  onClose,
  movieData: { title, languages, screens, releaseDate }
}: LanguageAndFormatProps): JSX.Element {
  const dateString = formatDate(releaseDate);

  const navigate = useNavigate();
  const titleSlug = createSlug(title);

  const handleBuyTickets = (language: string, screen: string): void => {
    navigate(
      `/buytickets/${titleSlug}-${language}-${screen}?releasedate=${dateString}`
    );
    return;
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
            <p className='bg-stone-100 px-4 pb-1 pt-4 text-sm font-medium uppercase text-stone-600'>
              {language}
            </p>

            <div className='flex gap-4 px-4 py-4'>
              {screens.map((screen, i) => (
                <p
                  className='cursor-pointer rounded-2xl border border-stone-300 px-4 py-2 text-sm font-medium uppercase text-rose-600'
                  key={i}
                  onClick={() => handleBuyTickets(language, screen)}
                >
                  {screen}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
