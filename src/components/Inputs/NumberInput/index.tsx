import { NumberInputStyled } from "./style";

interface NumberInputProps {
    placeholder: string;
    name: string;
    className?: string;
    onChange: any;
}

export function NumberInput({
  placeholder,
  name,
  className,
  onChange,
}: NumberInputProps) {
  return (
    <NumberInputStyled
      type="number"
      placeholder={placeholder}
      name={name}
      className={className}
      onChange={onChange}
    />
  );
}