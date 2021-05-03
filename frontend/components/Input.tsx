export type InputType = {
  name: string;
  type: "email" | "text" | "password";
  required: boolean;
  placeholder: string;
  id: string;
};

export function Input({ required = true, type = "text", ...props }: InputType) {
  return (
    <input
      {...props}
      required={required}
      type={type}
      autoComplete={type === "password" ? "current-password" : undefined}
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
    />
  );
}

export default Input;
