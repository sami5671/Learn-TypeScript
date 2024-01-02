import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

const User2 = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "Md. Sami",
        email: "Sami5671@gmail.com",
      });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>LogIn</button>
      <button onClick={handleLogout}>LogOut</button>

      <div>user Name is: {userContext?.user?.name}</div>
      <div>user Email is: {userContext?.user?.email}</div>
    </div>
  );
};

export default User2;
