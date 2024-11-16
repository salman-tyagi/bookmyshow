interface CloseModalBtnProps {
  onClose(): void;
}

function CloseModalBtn({ onClose }: CloseModalBtnProps): JSX.Element {
  return (
    <span
      className='absolute right-4 top-2 cursor-pointer text-3xl font-thin'
      onClick={onClose}
    >
      &times;
    </span>
  );
}

export default CloseModalBtn;
