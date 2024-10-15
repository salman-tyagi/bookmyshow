interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

function Modal({ children }: ModalProps): JSX.Element {
  return (
    <div className='modal-overlay'>
      <div className='modal-centered'>{children}</div>
    </div>
  );
}

export default Modal;
