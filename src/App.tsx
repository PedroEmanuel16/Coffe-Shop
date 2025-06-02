import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

export function App(){
  return (
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <OrderProvider>
            <CartProvider>
              <Router />
            </CartProvider>
          </OrderProvider>
        </BrowserRouter>
      </ThemeProvider>
  )
}