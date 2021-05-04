import Input, { InputType } from "./Input";

type InputWithLabelType = InputType & {
  label: string;
};

export function InputWithLabel({ label, ...props }: InputWithLabelType) {
  return (
    <div className="mt-1">
      <label htmlFor={props.name} className="">
        {label}
      </label>
      <Input {...props} />
    </div>
  );
}

export default InputWithLabel;
