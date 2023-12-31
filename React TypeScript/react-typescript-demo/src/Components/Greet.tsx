type greetPorps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: greetPorps) => {
  // ================DESTRUCTURE PROPS=================================================
  const { messageCount = 0, name, isLoggedIn } = props;
  // =================================================================
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome!! ${name} this is the world of typescript. You have
        ${messageCount} Emails On your Spam Folder`
          : "welcome guest"}
      </h2>
    </div>
  );
};

export default Greet;
