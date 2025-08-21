const Title = (props) => {
  return (
    <h1 className="text-3xl text-slate-200 font-bold text-center">
      {props.children}
    </h1>
  );
};

export default Title;
