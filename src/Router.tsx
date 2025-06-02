import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { ShoppingCar } from "./pages/ShoppingCar";
import { OrderConfirmed } from "./pages/OrderConfirmed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/carrinho" element={<ShoppingCar />}></Route>
        <Route path="/pedido-confirmado" element={<OrderConfirmed />}></Route>
      </Route>
    </Routes>
  );
}
