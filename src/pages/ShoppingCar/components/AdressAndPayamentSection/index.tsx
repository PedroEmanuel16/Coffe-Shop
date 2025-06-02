import PinIcon from "../../../../assets/pinIcon.png";
import MoneyIcon from "../../../../assets/money.png";
import CartaoDeCreditoIcon from "../../../../assets/cartao-de-credito.png";
import CartaoDeDebitoIcon from "../../../../assets/cartao-de-debito.png";
import DinheiroIcon from "../../../../assets/dinheiro.png";

import { NumberInput } from "../../../../components/Inputs/NumberInput";
import { TextInput } from "../../../../components/Inputs/TextInput";
import {
  AdressAndPayementDiv,
  AdressCard,
  PayementCard,
  RadiosContainer,
  TitleAdress,
  TitlePayament,
} from "./style";
import { RadioInput } from "../../../../components/Inputs/RadioInput";

interface Props {
  address: {
    cep: string;
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
  };
  paymentMethod: string;
  onAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPaymentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function AdressAndPayementSection({
  address,
  paymentMethod,
  onAddressChange,
  onPaymentChange,
}: Props) {
  return (
    <AdressAndPayementDiv>
      <h3>Complete seu pedido</h3>

      <AdressCard>
        <TitleAdress>
          <img src={PinIcon} alt="" className="pinIcon" />
          <div>
            <h3>Endereço de Entrega</h3>
            <h4>Informe o endereço onde deseja receber seu pedido</h4>
          </div>
        </TitleAdress>

        <NumberInput
          placeholder="CEP"
          name="CEP"
          className="CEP"
          value={address.cep}
          onChange={onAddressChange}
        />
        <TextInput
          placeholder="Rua"
          name="RUA"
          value={address.rua}
          onChange={onAddressChange}
        />
        <div className="inputs">
          <NumberInput
            placeholder="Número"
            name="NUMERO"
            className="NUMERO"
            value={address.numero}
            onChange={onAddressChange}
          />
          <TextInput
            placeholder="Complemento"
            name="COMPLEMENTO"
            className="COMPLEMENTO"
            value={address.complemento}
            onChange={onAddressChange}
          />
        </div>
        <div className="inputs">
          <TextInput
            placeholder="Bairro"
            name="BAIRRO"
            className="BAIRRO"
            value={address.bairro}
            onChange={onAddressChange}
          />
          <TextInput
            placeholder="Cidade"
            name="CIDADE"
            className="CIDADE"
            value={address.cidade}
            onChange={onAddressChange}
          />
          <TextInput
            placeholder="UF"
            name="UF"
            className="UF"
            value={address.uf}
            onChange={onAddressChange}
          />
        </div>
      </AdressCard>

      <PayementCard>
        <TitlePayament>
          <img src={MoneyIcon} alt="" className="moneyIcons" />
          <div>
            <h3>Pagamento</h3>
            <h4>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </h4>
          </div>
        </TitlePayament>

        <RadiosContainer>
          <RadioInput
            id="CARTAODECREDITO"
            label="CARTÃO DE CRÉDITO"
            name="FORMADEPAGAMENTO"
            value="CARTAODECREDITO"
            checked={paymentMethod === "CARTAODECREDITO"}
            onChange={onPaymentChange}
          >
            <img src={CartaoDeCreditoIcon} alt="" />
          </RadioInput>
          <RadioInput
            id="CARTAODEBITO"
            label="CARTÃO DE DÉBITO"
            name="FORMADEPAGAMENTO"
            value="CARTAODEBITO"
            checked={paymentMethod === "CARTAODEBITO"}
            onChange={onPaymentChange}
          >
            <img src={CartaoDeDebitoIcon} alt="" />
          </RadioInput>
          <RadioInput
            id="DINHEIRO"
            label="DINHEIRO"
            name="FORMADEPAGAMENTO"
            value="DINHEIRO"
            checked={paymentMethod === "DINHEIRO"}
            onChange={onPaymentChange}
          >
            <img src={DinheiroIcon} alt="" />
          </RadioInput>
        </RadiosContainer>
      </PayementCard>
    </AdressAndPayementDiv>
  );
}
