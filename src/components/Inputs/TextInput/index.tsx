import { TextInputStyled } from "./style";

interface TextInputProps {
  placeholder: string;
  name: string;
  className?: string;
  onChange: any;
}

export function TextInput({ placeholder, name, className, onChange }: TextInputProps) {
    return (
      <TextInputStyled
        placeholder={placeholder}
        name={name}
        className={className}
        onChange={onChange}
      />
    );
}