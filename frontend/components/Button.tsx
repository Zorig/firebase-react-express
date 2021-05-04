import React from "react";

type ButtonType = {
  text: string;
  onClick: () => void;
  type?: "submit" | "button";
  color?: "green" | "gray" | "indigo";
};

export function Button({
  text,
  onClick,
  type = "button",
  color = "indigo",
  ...props
}: ButtonType) {
  const className = `py-2 px-4 mx-1 border border-transparent text-sm font-medium rounded-md text-white bg-${color}-400 hover:bg-${color}-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;

  return (
    <button {...props} type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
}

export default Button;
