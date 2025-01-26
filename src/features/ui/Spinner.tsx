interface SpinnerProps {
  color?: string;
  borderTopColor?: string;
  width?: number;
  borderWidth?: number;
  position?: string;
  className?: string;
}

function Spinner({
  color = '#f43f5e',
  borderTopColor = '#ffaebb',
  width = 24,
  borderWidth = 5,
  position = 'center',
  className = ''
}: SpinnerProps): JSX.Element {
  const spinnerStyle = {
    width: width,
    height: width,
    border: `${borderWidth}px solid ${color}`,
    borderTop: `${borderWidth}px solid ${borderTopColor}`,
    borderRadius: '50%',
    margin: `${position === 'left' ? 0 : position === 'right' ? '0 0 0 auto' : '0 auto'}`
  };

  return (
    <div style={spinnerStyle} className={`animate-spin ${className}`}></div>
  );
}

export default Spinner;
