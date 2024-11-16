import CloseModalBtn from '../ui/CloseModalBtn';
import Modal from '../ui/Modal';

interface LanguageAndFormatProps {
  onClose(): void;
  movieData: {
    title: string;
    languages: string[];
    screens: string[];
  };
}

function LanguageAndFormat({
  onClose,
  movieData: { title, languages, screens }
}: LanguageAndFormatProps): JSX.Element {
  return (
    <Modal animation='animate-slide-top' onClose={onClose}>
      <div className='relative w-[22.5rem]'>
        <CloseModalBtn onClose={onClose} />

        <p className='px-4 pt-4 text-sm font-medium text-stone-800'>{title}</p>
        <p className='px-4 pb-3 text-lg font-semibold text-black'>
          Select language and format
        </p>

        {languages.map(language => (
          <div key={language}>
            <p className='bg-stone-100 px-4 pb-1 pt-4 text-sm font-medium uppercase text-stone-600'>
              {language}
            </p>

            <div className='flex gap-4 px-4 py-4'>
              {screens.map(screen => (
                <p
                  className='cursor-pointer rounded-2xl border border-stone-300 px-4 py-2 text-sm font-medium uppercase text-rose-600'
                  key={screen}
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

export default LanguageAndFormat;
