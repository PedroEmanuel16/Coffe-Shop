
import { CardDataOrder, DataOrderGeneral, DataOrderMain, InfoOrder, InfoOrderIcon, InfoOrderText } from "./style";
import ImgMotoboy from "../../assets/motoboy.png"
import { Clock, MapPin, Money } from "phosphor-react";
import { useOrder } from "../../context/OrderContext";


export function OrderConfirmed() {

    const { orderData } = useOrder();

    console.log(orderData)

    return (
      <DataOrderMain>
        <DataOrderGeneral>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <CardDataOrder>
            <InfoOrder>
              <InfoOrderIcon>
                <MapPin weight="fill" className="pinLocal" />
              </InfoOrderIcon>

              <InfoOrderText>
                <h4>
                  Entrega em{" "}
                  <span>
                    {orderData?.address.rua}, {orderData?.address.numero}
                  </span>
                </h4>
                <h4>
                  {orderData?.address.bairro} - {orderData?.address.cidade},{" "}
                  {orderData?.address.uf}
                </h4>
              </InfoOrderText>
            </InfoOrder>

            <InfoOrder>
              <InfoOrderIcon>
                <Clock weight="fill" className="clock" />
              </InfoOrderIcon>

              <InfoOrderText>
                <h4>Previsão de entrega</h4>
                <h4>
                  <span>20 min - 30 min</span>
                </h4>
              </InfoOrderText>
            </InfoOrder>

            <InfoOrder>
              <InfoOrderIcon>
                <Money weight="fill" className="money" />
              </InfoOrderIcon>

              <InfoOrderText>
                <h4>Pagamento na entrega</h4>
                <h4>
                  {orderData?.paymentMethod == 'CARTAODECREDITO' ? (
                    <span>Cartão de Crédito</span>
                  ) : (orderData?.paymentMethod == 'CARTAODEBITO' ? (
                    <span>Cartão de Débito</span>
                  ) : (
                    <span>Dinheiro</span>
                  ))}
                  
                </h4>
              </InfoOrderText>
            </InfoOrder>
          </CardDataOrder>
        </DataOrderGeneral>

        <img src={ImgMotoboy} />
      </DataOrderMain>
    );
}