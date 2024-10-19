interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

function Modal({ children }: ModalProps): JSX.Element {
  return (
    <div className='modal-overlay'>
      <div className='modal-centered animate-slide-bottom'>{children}</div>
    </div>
  );
}

export default Modal;
