type personListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: personListProps) => {
  return (
    <div>
      <h1>person lists are here </h1>

      <div>
        {props.names.map((name) => {
          return (
            <h1 key={name.first}>
              {name.first} {name.last}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default PersonList;
