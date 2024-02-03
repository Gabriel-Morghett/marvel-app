import React, { MouseEventHandler } from "react";

interface ButtonProps {
  text: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

export default Button;