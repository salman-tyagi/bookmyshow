import { useEffect } from 'react';

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
  onCloseModal
}: ModalProps): JSX.Element {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={`overlay ${direction}`} onClick={onCloseModal}>
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
