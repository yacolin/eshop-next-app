"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { Carts } from "@/lib/api-gen/Carts";

const cartsApi = new Carts({ baseUrl: "" });

function authHeaders(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("access_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

interface CartItem {
  id: number;
  sku_id: number;
  product_id: number;
  quantity: number;
  price: number;
  product_name: string;
  sku: string;
  stock: number;
}

interface CartContextValue {
  items: CartItem[];
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

async function fetchCartItems(): Promise<CartItem[]> {
  const res = await cartsApi.v1CartsList({ headers: authHeaders() });
  const data = res.data as any;
  return data?.data?.items ?? [];
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadCart = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setItems(await fetchCartItems());
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
      await cartsApi.v1CartsCreate({ sku_id: skuId, quantity: 1 }, { headers: authHeaders() });
      setItems(await fetchCartItems());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to add item");
    }
  }, []);

  const removeItem = useCallback(async (itemId: number) => {
    try {
      setError(null);
      await cartsApi.v1CartsDelete({ sku_id: itemId }, { headers: authHeaders() });
      setItems(await fetchCartItems());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to remove item");
    }
  }, []);

  const updateQuantity = useCallback(
    async (itemId: number, quantity: number) => {
      if (quantity <= 0) return removeItem(itemId);
      try {
        setError(null);
        await cartsApi.v1CartsUpdate({ sku_id: itemId, quantity }, { headers: authHeaders() });
        setItems(await fetchCartItems());
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to update quantity");
      }
    },
    [removeItem],
  );

  const clearCartAction = useCallback(async () => {
    try {
      setError(null);
      await cartsApi.v1CartsClearCreate(undefined, { headers: authHeaders() });
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
