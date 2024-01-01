import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "sami",
      email: "sami@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>LogIn</button>
      <button onClick={handleLogout}>LogOut</button>

      <div>
        <h1>USER NAME IS: {user?.name} </h1>
        <h1>USER EMAIL IS: {user?.email}</h1>
      </div>
    </div>
  );
};

export default User;
