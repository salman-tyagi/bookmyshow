interface SpinnerProps {
  color?: string;
  borderTopColor?: string;
  width?: number;
  borderWidth?: number;
}

function Spinner({
  color = '#f43f5e',
  borderTopColor = '#ffaebb',
  width = 24,
  borderWidth = 5
}: SpinnerProps): JSX.Element {
  const spinnerStyle = {
    width: width,
    height: width,
    border: `${borderWidth}px solid ${color}`,
    borderTop: `${borderWidth}px solid ${borderTopColor}`,
    borderRadius: '50%',
    margin: '0 auto'
  };

  return <div style={spinnerStyle} className='animate-spin'></div>;
}

export default Spinner;
