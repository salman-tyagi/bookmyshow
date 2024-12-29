interface TooltipProps {
  color?: string;
  borderColor?: string;
  top?: string;
  left?: string;
  children: React.ReactNode;
}

function Tooltip({
  color = 'blue',
  borderColor = 'red',
  children
}: TooltipProps): JSX.Element {
  return (
    <div
      className={`before:content-() after:content-() fixed hidden border bg-white peer-hover:block border-${borderColor}-500 px-0.5 leading-3 font-medium text-${color}-500 before:absolute before:top-full before:left-[12px] before:border-3 before:border-${borderColor}-500 before:border-r-transparent before:border-b-transparent before:border-l-transparent after:absolute after:top-full after:left-4 after:-mt-px after:border-3 after:border-white after:border-r-transparent after:border-b-transparent after:border-l-transparent`}
    >
      {children}
    </div>
  );
}

export default Tooltip;
