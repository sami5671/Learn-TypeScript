type oscarProp = {
  children: React.ReactNode;
};
const Oscar = (props: oscarProp) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
};

export default Oscar;
