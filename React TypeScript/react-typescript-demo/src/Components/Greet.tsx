type greetPorps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: greetPorps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? ` Welcome!! {props.name} this is the world of typescript. You have
        {props.messageCount} Emails On your Spam Folder`
          : "welcome guest"}
      </h2>
    </div>
  );
};

export default Greet;
