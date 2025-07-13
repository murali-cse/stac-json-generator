const Grid = ({
  cols,
  children,
}: {
  cols: number;
  children: React.ReactNode;
}) => {
  return <div className={`grid grid-cols-${cols} gap-3 mt-5`}>{children}</div>;
};

export default Grid;
