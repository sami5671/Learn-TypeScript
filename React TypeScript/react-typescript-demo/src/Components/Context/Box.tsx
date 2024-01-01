import { useContext } from "react";
import { themeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(themeContext);

  return (
    <div
      style={{
        backgroundColor: theme.primary.main,
        color: theme.secondary.text,
      }}
    >
      <h2>Theme Context </h2>
    </div>
  );
};

export default Box;
