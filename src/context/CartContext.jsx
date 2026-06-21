import { useState } from "react";
import { CartContext } from "./cart-context";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(productId) {
    setCartItems((currentCartItems) => {
      const existing = currentCartItems.find((item) => item.id === productId);

      if (existing) {
        return currentCartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCartItems, { id: productId, quantity: 1 }];
    });
  }

  function decreaseCartItemQuantity(productId) {
    setCartItems((currentCartItems) =>
      currentCartItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(productId) {
    setCartItems((currentCartItems) =>
      currentCartItems.filter((item) => item.id !== productId),
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseCartItemQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
