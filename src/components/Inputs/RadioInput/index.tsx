import { Outlet } from "react-router-dom";
import { Container, Label, RadioInputStyled } from "./style";

interface RadioInputProps {
  label: string;
  name: string;
  value: string;
  id: string;
  children: any;
  onChange: any;
}

export function RadioInput({ label, name, value, id, children, onChange }: RadioInputProps) {
  return (
    <Container>
      <RadioInputStyled type="radio" id={id} name={name} value={value} onChange={onChange} />
      <Label htmlFor={id}>
        {children}
        <span>{label}</span>
      </Label>
    </Container>
  );
}
