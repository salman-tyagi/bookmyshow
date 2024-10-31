interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  direction?: 'left' | 'centered' | 'right';
  rounded?: '' | 'sm' | 'md' | 'lg' | 'xl';
  animation?: string;
}

function Modal({
  children,
  direction = 'centered',
  rounded = '',
  animation = ''
}: ModalProps): JSX.Element {
  return (
    <div className={`overlay ${direction}`}>
      <div
        className={`fixed top-24 ${rounded && `rounded-${rounded}`} overflow-hidden bg-white ${animation && animation}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
