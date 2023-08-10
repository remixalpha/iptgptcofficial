function Card(props) {
  const { variant, extra, children, ...rest } = props;
  return (
    <div
      className={`!z-5 relative group flex flex-col  bg-white bg-clip-border  rounded-primary hover:overflow-hidden  hover:scale-110  hover:shadow-lg transition-all duration-300  ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
