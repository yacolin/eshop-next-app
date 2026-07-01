"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Auth } from "@/lib/api-gen/Auth";
import type { UserPasswordLoginReq } from "@/lib/api-gen/data-contracts";

const authApi = new Auth({ baseUrl: "" });

interface AuthContextValue {
  isAuthenticated: boolean;
  username: string | null;
  login: (data: UserPasswordLoginReq) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function getStoredAuth() {
  if (typeof window === "undefined") return { token: null, username: null };
  return {
    token: localStorage.getItem("access_token"),
    username: localStorage.getItem("username"),
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const { token, username: stored } = getStoredAuth();
    setIsAuthenticated(!!token);
    setUsername(stored);
    setLoading(false);
  }, []);

  const login = useCallback(
    async (data: UserPasswordLoginReq) => {
      const res = await authApi.v1AuthLoginPasswordCreate(data);
      const result = res.data?.data;
      if (!result) throw new Error("Login failed");
      localStorage.setItem("access_token", result.access_token ?? "");
      localStorage.setItem("refresh_token", result.refresh_token ?? "");
      localStorage.setItem("username", result.username ?? "");
      localStorage.setItem("user_id", String(result.user_id ?? ""));
      setIsAuthenticated(true);
      setUsername(result.username ?? null);
      router.push("/");
    },
    [router],
  );

  const logout = useCallback(() => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    localStorage.removeItem("user_id");
    localStorage.removeItem("cart_session_id");
    setIsAuthenticated(false);
    setUsername(null);
    router.push("/");
  }, [router]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
