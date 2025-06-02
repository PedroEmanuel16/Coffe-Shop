
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../context/OrderContext";
import { AdressAndPayementSection } from "./components/AdressAndPayamentSection";
import { CoffesSelectedSection } from "./components/CoffesSelectedSection";
import { ShoppingCarSections } from "./style";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

export function ShoppingCar() {
  const { setOrderData } = useOrder();

  const [address, setAddress] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<
    "CARTAODECREDITO" | "CARTAODEBITO" | "DINHEIRO" | ""
  >("");

  function handleAddressChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name.toLowerCase()]: value }));
  }

  function handlePaymentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPaymentMethod(e.target.value as any);
  }

  const navigate = useNavigate();
  const { clearCart } = useCart();

  function handleConfirmClick() {
    clearCart();

    navigate("/pedido-confirmado");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { cep, rua, numero, bairro, cidade, uf } = address;

    if (
      !cep.trim() ||
      !rua.trim() ||
      !numero.trim() ||
      !bairro.trim() ||
      !cidade.trim() ||
      !uf.trim()
    ) {
      alert(
        "Por favor, preencha todos os campos do endereço, exceto complemento."
      );
      return;
    }

    if (!paymentMethod) {
      alert("Selecione uma forma de pagamento.");
      return;
    }

    setOrderData({ address, paymentMethod });
    handleConfirmClick();
  }

  return (
    <ShoppingCarSections>
      <form onSubmit={handleSubmit}>
        <AdressAndPayementSection
          address={address}
          onAddressChange={handleAddressChange}
          paymentMethod={paymentMethod}
          onPaymentChange={handlePaymentChange}
        />
        <CoffesSelectedSection />
      </form>
    </ShoppingCarSections>
  );
}
