type StatusProp = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProp) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetching successfully";
  } else if (props.status === "error") {
    message = "Error Fetching data";
  }

  return (
    <div>
      <h2>Status- {message}</h2>
    </div>
  );
};

export default Status;
