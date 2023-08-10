function Card(props) {
  const { variant, extra, children, ...rest } = props;
  return (
    <div
      className={`z-2 relative group flex flex-col  bg-white bg-clip-border w-auto h-auto rounded-primary shadow-xl overflow-hidden   transition-all duration-300 cursor-pointer ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
