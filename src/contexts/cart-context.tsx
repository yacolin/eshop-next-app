"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { CartItemData } from "@/types/cart";
import {
  fetchCart as apiFetchCart,
  addToCart as apiAddToCart,
  updateCartItem as apiUpdateCartItem,
  removeCartItem as apiRemoveCartItem,
  clearCart as apiClearCart,
} from "@/lib/api";

interface CartContextValue {
  items: CartItemData[];
  loading: boolean;
  error: string | null;
  addItem: (skuId: number) => Promise<void>;
  removeItem: (itemId: number) => Promise<void>;
  updateQuantity: (itemId: number, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | null>(null);

function getUserId(): number | null {
  if (typeof window === "undefined") return null;
  const val = localStorage.getItem("user_id");
  return val ? Number(val) : null;
}

function getSessionId(): string | null {
  if (typeof window === "undefined") return null;
  let id = localStorage.getItem("cart_session_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("cart_session_id", id);
  }
  return id;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItemData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadCart = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const userId = getUserId();
      const sessionId = getSessionId();
      const cart = await apiFetchCart(userId, sessionId);
      setItems(cart.items);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load cart");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  const addItem = useCallback(async (skuId: number) => {
    try {
      setError(null);
      const userId = getUserId();
      const sessionId = getSessionId();
      const cart = await apiAddToCart({ sku_id: skuId, quantity: 1 }, userId, sessionId);
      setItems(cart.items);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to add item");
    }
  }, []);

  const removeItem = useCallback(async (itemId: number) => {
    try {
      setError(null);
      const userId = getUserId();
      const sessionId = getSessionId();
      const cart = await apiRemoveCartItem(itemId, userId, sessionId);
      setItems(cart.items);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to remove item");
    }
  }, []);

  const updateQuantity = useCallback(
    async (itemId: number, quantity: number) => {
      if (quantity <= 0) {
        return removeItem(itemId);
      }
      try {
        setError(null);
        const userId = getUserId();
        const sessionId = getSessionId();
        const cart = await apiUpdateCartItem(itemId, { quantity }, userId, sessionId);
        setItems(cart.items);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to update quantity");
      }
    },
    [removeItem],
  );

  const clearCartAction = useCallback(async () => {
    try {
      setError(null);
      const userId = getUserId();
      const sessionId = getSessionId();
      await apiClearCart(userId, sessionId);
      setItems([]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to clear cart");
    }
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        loading,
        error,
        addItem,
        removeItem,
        updateQuantity,
        clearCart: clearCartAction,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
