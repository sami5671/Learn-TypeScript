type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: InputProps) => {
  // ====================define the handler within the component=============================================
  //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(event);
  //   };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
