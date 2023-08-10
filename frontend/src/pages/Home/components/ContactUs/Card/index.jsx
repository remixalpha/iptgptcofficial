function Card(props) {
  const { variant, extra, children, ...rest } = props;
  return (
    <div
      className={`!z-5 relative group flex flex-col  bg-white bg-clip-border  rounded-primary shadow-xl hover:overflow-hidden  hover:scale-90  hover:shadow-lg transition-all duration-300  ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
