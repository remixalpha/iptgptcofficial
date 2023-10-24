function Card(props) {
  const { variant, extra, children, ...rest } = props;
  return (
    <div
      className={`!z-2 relative group flex flex-col  bg-white bg-clip-border w-full h-full rounded-primary hover:overflow-hidden hover:z-10 hover:scale-110  hover:shadow-lg transition-all duration-300  ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
