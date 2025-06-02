import { CardCoffe } from "../../../../components/Cards/CardCoffe";

import ExpressoImg from "../../../../assets/traditional-coffe.png";
import CoffeAmerican from "../../../../assets/american-coffe.png";
import CoffeCremoss from "../../../../assets/cremoss-coffe.png";
import CoffeCold from "../../../../assets/cold-coffe.png";
import CoffeWithMilk from "../../../../assets/coffe-with-milk.png";
import LatteImg from "../../../../assets/latte.png";
import Capuccino from "../../../../assets/capuccino.png";
import Macchiato from "../../../../assets/macchiato.png";
import Mocaccino from "../../../../assets/mocaccino.png";
import CoffeWarm from "../../../../assets/warm-coffe.png";
import Cubano from "../../../../assets/cubano.png";
import Havaiano from "../../../../assets/havaiano.png";
import Arabe from "../../../../assets/arabe.png";
import Irlandes from "../../../../assets/irlandes.png";

import { Coffes, CoffesCard, CoffesSelectedDiv } from "./style";
import { DataBuy } from "./components/DataBuy";
import { useCart } from "../../../../context/CartContext";

const coffeeImages: Record<string, string> = {
  "Expresso Tradicional": ExpressoImg,
  "Expresso Americano": CoffeAmerican,
  "Expresso Cremoso": CoffeCremoss,
  "Expresso Gelado": CoffeCold,
  "Café com Leite": CoffeWithMilk,
  Latte: LatteImg,
  Capuccino: Capuccino,
  Macchiato: Macchiato,
  Mocaccino: Mocaccino,
  "Chocolate Quente": CoffeWarm,
  Cubano: Cubano,
  Havaiano: Havaiano,
  Árabe: Arabe,
  Irlandês: Irlandes,
};


export function CoffesSelectedSection(){

    const {cart} = useCart();

    console.log(cart)

    return (
      <CoffesSelectedDiv>
        <h3>Cafés selecionados</h3>

        <CoffesCard>
          <Coffes>
            {cart.map(({ coffee, quantity, price }) => {
              const image = coffeeImages[coffee] || ExpressoImg; 
              return (
                <CardCoffe
                  coffe={coffee}
                  price={price}
                  quantity={quantity}
                  src={image}
                />
              );
            })}
          </Coffes>
          
          <DataBuy />
        </CoffesCard>
      </CoffesSelectedDiv>
    );
}