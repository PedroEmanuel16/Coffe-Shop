import { useNavigate } from "react-router-dom";
import { ButtonYellowStyled } from "./style";
import { useCart } from "../../../context/CartContext";

interface ButtonYellow {
    value: string;
    id: string;
    name: string;
    type: "submit" | "button";
}

export function ButtonYellow({ value, id, name, type }: ButtonYellow) {

    

    return (
      <ButtonYellowStyled id={id} name={name} type={type}>
        {value}
      </ButtonYellowStyled>
    );
}