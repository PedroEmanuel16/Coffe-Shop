import { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  coffee: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  decreaseFromCart: (coffee: string) => void;
  removeFromCart: (coffee: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalQuantity: () => number;
  increaseOne: (coffee: string) => void;
  deleteCoffee: (coffee: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const UNIT_PRICE = 9.9;

  function addToCart(item: CartItem) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.coffee === item.coffee);
      if (existingItem) {
        return prevCart.map((i) => {
          if (i.coffee === item.coffee) {
            const newQuantity = i.quantity + item.quantity;
            const newPrice = parseFloat((UNIT_PRICE * newQuantity).toFixed(2));
            return {
              ...i,
              quantity: newQuantity,
              price: newPrice,
            };
          }
          return i;
        });
      }
      return [
        ...prevCart,
        {
          coffee: item.coffee,
          quantity: item.quantity,
          price: parseFloat((UNIT_PRICE * item.quantity).toFixed(2)),
        },
      ];
    });
  }


  function decreaseFromCart(coffee: string) {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.coffee === coffee);
      if (!item) return prevCart;

      if (item.quantity === 1) {
        return prevCart.filter((i) => i.coffee !== coffee);
      }

      const newQuantity = item.quantity - 1;
      const newPrice = parseFloat((UNIT_PRICE * newQuantity).toFixed(2));

      return prevCart.map((i) =>
        i.coffee === coffee
          ? {
              ...i,
              quantity: newQuantity,
              price: newPrice,
            }
          : i
      );
    });
  }

  function increaseOne(coffeeName: string) {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.coffee === coffeeName) {
          const newQuantity = item.quantity + 1;
          const newPrice = parseFloat((UNIT_PRICE * newQuantity).toFixed(2));
          return {
            ...item,
            quantity: newQuantity,
            price: newPrice,
          };
        }
        return item;
      });
    });
  }

  function deleteCoffee(coffeeName: string) {
    setCart((prevCart) =>
      prevCart.filter((item) => item.coffee !== coffeeName)
    );
  }


  function getTotalQuantity() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }


  function removeFromCart(coffee: string) {
    setCart((prevCart) => prevCart.filter((item) => item.coffee !== coffee));
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price, 0);
  }


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        decreaseFromCart,
        getTotalPrice,
        getTotalQuantity,
        increaseOne,
        deleteCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
