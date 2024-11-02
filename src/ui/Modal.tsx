import { useEffect } from 'react';
import getCity from '../utils/getCity';

interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  direction?: 'left' | 'centered' | 'right';
  rounded?: '' | 'sm' | 'md' | 'lg' | 'xl';
  animation?: string;
  onCloseModal?(): void;
}

function Modal({
  children,
  direction = 'centered',
  rounded = 'lg',
  animation = 'animate-slide-bottom',
  onCloseModal: closeCitiesModal
}: ModalProps): JSX.Element {
  const city = getCity();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleCloseModal = (): void => {
    if (!city) return;

    closeCitiesModal?.();
  };

  return (
    <div className={`overlay ${direction}`} onClick={handleCloseModal}>
      <div
        className={`fixed top-24 ${rounded && `rounded-${rounded}`} overflow-hidden bg-white ${animation && animation}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
