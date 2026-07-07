"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { isAuthenticated, username, logout, loading } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          E-Shop
        </Link>

        <nav className="flex items-center gap-2">
          {loading ? null : isAuthenticated ? (
            <>
              <Link href="/profile" className="text-sm text-muted-foreground hover:text-foreground">
                {username}
              </Link>
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
