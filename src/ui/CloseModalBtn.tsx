interface CloseModalBtnProps {
  onClose(): void;
}

function CloseModalBtn({ onClose }: CloseModalBtnProps): JSX.Element {
  return (
    <span
      className='absolute right-3 top-1 cursor-pointer text-3xl font-thin'
      onClick={onClose}
    >
      &times;
    </span>
  );
}

export default CloseModalBtn;
