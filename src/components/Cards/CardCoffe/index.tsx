import { ActionsCardCoffe, CardCoffeStyled, ChooseQuantity, InfoCardCoffe, RemoveButton } from "./style";
import TrashIcon from "../../../assets/trash.png"
import { useCart } from "../../../context/CartContext";

interface CardCoffeProps {
    coffe: string;
    quantity: number;
    price: number; 
    src: string;
    alt?: string;
}

export function CardCoffe({ coffe, quantity, price, src, alt }: CardCoffeProps) {

    const { decreaseFromCart, increaseOne, deleteCoffee } = useCart();

    return (
      <CardCoffeStyled>
        <img className="coffeImage" src={src} alt={alt} />

        <InfoCardCoffe>
          <h4>{coffe}</h4>
          <ActionsCardCoffe>
            <ChooseQuantity>
              <span
                onClick={() => {
                  decreaseFromCart(coffe);
                }}
              >
                -
              </span>
              <h4>{quantity}</h4>
              <span
                onClick={() => {
                  increaseOne(coffe);
                }}
              >
                +
              </span>
            </ChooseQuantity>

            <RemoveButton onClick={() => {
                deleteCoffee(coffe)
            }}>
              <img src={TrashIcon} />
              <h4>REMOVER</h4>
            </RemoveButton>
          </ActionsCardCoffe>
        </InfoCardCoffe>

        <h4>R$ {price}</h4>
      </CardCoffeStyled>
    );
}