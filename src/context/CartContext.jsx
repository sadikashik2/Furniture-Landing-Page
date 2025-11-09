import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (item) => {
    let updatedItems;
    setCartItems((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      updatedItems = exist
        ? prev.map((i) =>
            i.id === item.id ? { ...i, qty: i.qty + 1 } : i
          )
        : [...prev, { ...item, qty: 1 }];
      return updatedItems;
    });

    // Toast outside setState
    toast.success(`${item.name} added to cart`, { autoClose: 1500 });
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    let updatedItems;
    setCartItems((prev) => {
      updatedItems = prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0);
      return updatedItems;
    });

    // Optional toast only if item removed
    toast.info("Item quantity decreased", { autoClose: 1500 });
  };

  // Remove item completely
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
    toast.info("Item removed from cart", { autoClose: 1500 });
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Cart totals
  const itemCount = cartItems.reduce((a, i) => a + i.qty, 0);
  const cartTotal = cartItems.reduce((a, i) => a + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQty,
        removeFromCart,
        clearCart,
        itemCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
