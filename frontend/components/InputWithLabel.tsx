import Input, { InputType } from "./Input";

type InputWithLabelType = InputType & {
  label: string;
};

export function InputWithLabel({ id, label, ...props }: InputWithLabelType) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Input {...props} id={id} />
    </>
  );
}

export default InputWithLabel;
