type greetPorps = {
  name: string;
};

export const Greet = (props: greetPorps) => {
  return (
    <div>
      <h2>Welcome!! [{props.name}] this is the world of typescript</h2>
    </div>
  );
};

export default Greet;
