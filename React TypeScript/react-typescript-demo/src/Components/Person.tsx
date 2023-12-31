type personPorps = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: personPorps) => {
  return (
    <div>
      <h1>
        First: {props.name.first} <br />
        Last: {props.name.last}
      </h1>
    </div>
  );
};

export default Person;
