"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/lib/api-gen/UserAuth";
import type { UserPasswordLoginReq, UserPasswordLoginRes } from "@/types/product";
import type { GfEshopApiUserAuthV1UserRegisterRes } from "@/lib/api-gen/data-contracts";

const authApi = new UserAuth({ baseUrl: "" });

interface AuthContextValue {
  isAuthenticated: boolean;
  username: string | null;
  login: (data: UserPasswordLoginReq) => Promise<void>;
  register: (data: { username: string; password: string; email?: string }) => Promise<void>;
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

  const saveAuth = useCallback(
    (result: {
      access_token?: string;
      refresh_token?: string;
      username?: string;
      user_id?: number;
    }) => {
      localStorage.setItem("access_token", result.access_token ?? "");
      localStorage.setItem("refresh_token", result.refresh_token ?? "");
      localStorage.setItem("username", result.username ?? "");
      localStorage.setItem("user_id", String(result.user_id ?? ""));
      setIsAuthenticated(true);
      setUsername(result.username ?? null);
    },
    [],
  );

  const login = useCallback(
    async (data: UserPasswordLoginReq) => {
      const res = await authApi.v1UserAuthLoginCreate(data);
      const result = (res.data as any)?.data as UserPasswordLoginRes | undefined;
      if (!result) throw new Error("Login failed");
      saveAuth(result);
      router.push("/");
    },
    [router, saveAuth],
  );

  const register = useCallback(
    async (data: { username: string; password: string; email?: string }) => {
      const res = await authApi.v1UserAuthRegisterCreate(data);
      const result = (res.data as any)?.data as GfEshopApiUserAuthV1UserRegisterRes | undefined;
      if (!result) throw new Error("Register failed");
      saveAuth(result);
      router.push("/");
    },
    [router, saveAuth],
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
    <AuthContext.Provider value={{ isAuthenticated, username, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
