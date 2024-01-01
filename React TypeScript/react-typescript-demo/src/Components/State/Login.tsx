import { useState } from "react";

const Login = () => {
  // ----------------------------------------------------------------
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ----------------------------------------------------------------
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <div>
        <h1>{isLoggedIn ? "User is logged in" : "logged out"}</h1>
      </div>
    </div>
  );
};

export default Login;
