import CloseModalBtn from '../../ui/CloseModalBtn';
import Modal from '../../ui/Modal';

interface BuyOrRentProps {
  onClose(): void;
}

function BuyOrRent({ onClose }: BuyOrRentProps): JSX.Element {
  return (
    <Modal animation='animate-slide-top' onClose={onClose}>
      <div className='w relative w-[22.5rem] p-3'>
        <CloseModalBtn onClose={onClose} />

        <p>Choose a watch option</p>
      </div>
    </Modal>
  );
}

export default BuyOrRent;
