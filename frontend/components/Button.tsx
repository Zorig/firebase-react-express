import React from "react";

type ButtonType = React.HTMLProps<HTMLButtonElement> & {
	text: string;
	onClick: () => void;
};

const className =
	"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

export function Button({ text, onClick, props }: ButtonType) {
	return (
		<button {...props} onClick={onClick} className={className}>
			{text}
		</button>
	);
}

export default Button;
