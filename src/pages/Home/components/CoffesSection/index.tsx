import {
  AddToShoppingCar,
  BuyPart,
  CardsCoffes,
  CoffeCard,
  SectionCoffes,
  ShoppingCarPart,
  Tag,
  Tags,
} from "./style";

import CoffeTraditional from "../../../../assets/traditional-coffe.png";
import CoffeAmerican from "../../../../assets/american-coffe.png";
import CoffeCremoss from "../../../../assets/cremoss-coffe.png";
import CoffeCold from "../../../../assets/cold-coffe.png";
import CoffeWithMilk from "../../../../assets/coffe-with-milk.png";
import Latte from "../../../../assets/latte.png";
import Capuccino from "../../../../assets/capuccino.png";
import Macchiato from "../../../../assets/macchiato.png";
import Mocaccino from "../../../../assets/mocaccino.png";
import CoffeWarm from "../../../../assets/warm-coffe.png";
import Cubano from "../../../../assets/cubano.png";
import Havaiano from "../../../../assets/havaiano.png";
import Arabe from "../../../../assets/arabe.png";
import Irlandes from "../../../../assets/irlandes.png";

import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../../../context/CartContext";

const coffees = [
  {
    coffee: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["TRADICIONAL"],
    image: CoffeTraditional,
    price: 9.9,
  },
  {
    coffee: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["TRADICIONAL"],
    image: CoffeAmerican,
    price: 9.9,
  },
  {
    coffee: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["TRADICIONAL"],
    image: CoffeCremoss,
    price: 9.9,
  },
  {
    coffee: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["TRADICIONAL", "GELADO"],
    image: CoffeCold,
    price: 9.9,
  },
  {
    coffee: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["TRADICIONAL", "COM LEITE"],
    image: CoffeWithMilk,
    price: 9.9,
  },
  {
    coffee: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["TRADICIONAL", "COM LEITE"],
    image: Latte,
    price: 9.9,
  },
  {
    coffee: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    image: Capuccino,
    price: 9.9,
  },
  {
    coffee: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    image: Macchiato,
    price: 9.9,
  },
  {
    coffee: "Mocaccino",
    description: "Café expresso com calda de chocolate, leite e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    image: Mocaccino,
    price: 9.9,
  },
  {
    coffee: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["ESPECIAL", "COM LEITE"],
    image: CoffeWarm,
    price: 9.9,
  },
  {
    coffee: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    image: Cubano,
    price: 9.9,
  },
  {
    coffee: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["ESPECIAL"],
    image: Havaiano,
    price: 9.9,
  },
  {
    coffee: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["ESPECIAL"],
    image: Arabe,
    price: 9.9,
  },
  {
    coffee: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["ESPECIAL", "ALCOÓLICO"],
    image: Irlandes,
    price: 9.9,
  },
];


export function CoffesSection() {
  const { cart, addToCart, decreaseFromCart } = useCart();

  function handleAddToCart(coffee: string, price: number) {
    addToCart({ coffee, price, quantity: 1 });
  }

  function handleDecreaseFromCart(coffee: string) {
    decreaseFromCart(coffee);
  }

  function getQuantity(coffee: string): number {
    return cart.find((item) => item.coffee === coffee)?.quantity ?? 0;
  }

  console.log(cart)

  return (
    <SectionCoffes>
      <h2>Nossos cafés</h2>
      <CardsCoffes>
        {coffees.map(({ coffee, description, tags, image, price }) => (
          <CoffeCard key={coffee}>
            <img src={image} alt={`Imagem do ${coffee}`} />
            <Tags>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
            <h3>{coffee}</h3>
            <p>{description}</p>
            <BuyPart>
              <h4>
                R$ <span>{price.toFixed(2)}</span>
              </h4>
              <ShoppingCarPart>
                <AddToShoppingCar>
                  <span
                    onClick={() => handleDecreaseFromCart(coffee)}
                    style={{ cursor: "pointer" }}
                  >
                    -
                  </span>
                  <h4>{getQuantity(coffee)}</h4>
                  <span
                    onClick={() => handleAddToCart(coffee, price)}
                    style={{ cursor: "pointer" }}
                  >
                    +
                  </span>
                </AddToShoppingCar>
                <NavLink to="/carrinho" title="Ver Carrinho">
                  <ShoppingCart weight="fill" />
                </NavLink>
              </ShoppingCarPart>
            </BuyPart>
          </CoffeCard>
        ))}
      </CardsCoffes>
    </SectionCoffes>
  );
}
