// click event as an component prop
type EventButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const EventButton = (props: EventButtonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 90)}>
        Event Button
      </button>
    </div>
  );
};

export default EventButton;
