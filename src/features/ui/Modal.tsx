import { ReactNode, useEffect } from 'react';

import { getItem } from '../utils/localStorage';

interface ModalProps {
  children: ReactNode;
  onClose?(): void;
  direction?: 'left' | 'centered' | 'right';
  top?: number;
  rounded?: '' | 'sm' | 'md' | 'lg' | 'xl';
  animation?: string;
  className?: string;
}

function Modal({
  children,
  onClose,
  direction = 'centered',
  top = 0,
  rounded = 'lg',
  animation = 'animate-slide-bottom',
  className
}: ModalProps): JSX.Element {
  const city = getItem('city');

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleCloseModal = (): void => {
    if (!city) return;
    onClose?.();
  };

  return (
    <div
      className={`overlay ${direction} ${className}`}
      onClick={handleCloseModal}
    >
      <div
        className={`fixed ${rounded && `rounded-${rounded}`} overflow-hidden bg-white ${animation && animation}`}
        style={top ? { top } : {}}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
