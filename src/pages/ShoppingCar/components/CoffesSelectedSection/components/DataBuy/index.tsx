
import { ButtonYellow } from "../../../../../../components/Buttons/ButtonYellow";
import { useCart } from "../../../../../../context/CartContext";
import { DataDelivery, DataTotal, DataTotalItems } from "./style";

export function DataBuy() {

    const {  getTotalPrice } = useCart();

    return (
      <>
        <DataTotalItems>
          <h4>Total de itens</h4>
          <h4>R$ {getTotalPrice().toFixed(2)}</h4>
        </DataTotalItems>

        <DataDelivery>
          <h4>Entrega</h4>
          <h4>R$ 3,50</h4>
        </DataDelivery>

        <DataTotal>
          <h4>Total</h4>
          <h4>R$ {(getTotalPrice() + 3.5).toFixed(2)}</h4>
        </DataTotal>

        <ButtonYellow
          id="confirm"
          name="confirm"
          type="submit"
          value="CONFIRMAR PEDIDO"
        ></ButtonYellow>
      </>
    );
}