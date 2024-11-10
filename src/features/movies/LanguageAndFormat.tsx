import CloseModalBtn from '../ui/CloseModalBtn';
import Modal from '../ui/Modal';

interface LanguageAndFormatProps {
  onClose(): void;
  data: {
    title: string;
    languages: string;
    screens: string;
  };
}

function LanguageAndFormat({
  onClose,
  data: { title, languages, screens }
}: LanguageAndFormatProps): JSX.Element {
  return (
    <Modal animation='animate-slide-top' onClose={onClose}>
      <div className='relative w-[22.5rem] p-3'>
        <CloseModalBtn onClose={onClose} />

        <p>{title}</p>
        <p>Select language and format</p>

        <p>{languages}</p>

        <ul className='flex space-x-2'>
          <li>{screens}</li>
        </ul>
      </div>
    </Modal>
  );
}

export default LanguageAndFormat;
