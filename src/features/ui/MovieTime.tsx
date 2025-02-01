interface MovieTimeProps {
  children: React.ReactNode;
  onLayoutPage?: boolean;
  selected?: boolean;
}

function MovieTime({
  children,
  onLayoutPage = false,
  selected = false
}: MovieTimeProps): JSX.Element {
  return (
    <div
      className={`rounded border border-${onLayoutPage ? 'green-500' : 'stone-400'} px-7 py-2.5 text-[13px] text-${selected ? 'white' : 'green-500'} ${selected ? 'bg-green-500' : ''}`}
    >
      {children}
    </div>
  );
}

export default MovieTime;
