function Card(props) {
  const { variant, extra, children, ...rest } = props;
  return (
    <div
      className={`z-2 relative group flex flex-col  bg-white bg-clip-border  rounded-primary shadow-xl overflow-hidden  hover:scale-110  hover:shadow-lg transition-all duration-300 cursor-pointer ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
