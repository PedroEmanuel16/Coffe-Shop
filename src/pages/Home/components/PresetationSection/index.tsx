import { CardsContainer, PresetationSection, TextPresetation } from "./style";
import Cafe from "../../../../assets/Imagem.png"
import { Clock, Coffee, Package, ShoppingCart } from "phosphor-react";

export function PresentationSection() {
  return (
    <PresetationSection>
      <TextPresetation>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <CardsContainer>
          <div>
            <ShoppingCart className="card-shopping" weight="fill" />
            Compra simples e segura
          </div>
          <div>
            <Package className="box" weight="fill" />
            Embalagem mantém o café intacto
          </div>
          <div>
            <Clock className="clock" weight="fill" />
            Entrega rápida e rastreada
          </div>
          <div>
            <Coffee className="cup-coffe" weight="fill" />O café chega
            fresquinho até você
          </div>
        </CardsContainer>
      </TextPresetation>
      <img src={Cafe} alt="Imagem de um copo de café" />
    </PresetationSection>
  );
}