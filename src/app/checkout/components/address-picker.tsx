"use client";

function authHeaders(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("access_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

import { useState, useEffect } from "react";
import { MapPin, ChevronDown, ChevronRight, Plus, Loader2 } from "lucide-react";
import { Address } from "@/lib/api-gen/Address";
import type { UserAddress } from "@/types/product";

interface Props {
  onAddNew: () => void;
  onSelect?: (addressId: number) => void;
}

export function AddressPicker({ onAddNew, onSelect }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [addresses, setAddresses] = useState<UserAddress[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await new Address({ baseUrl: "" }).v1AddressesList({
          headers: authHeaders(),
        });
        if (cancelled) return;
        const list = (res.data as any)?.data?.list ?? [];
        setAddresses(list);
        // Auto-select default, or first address
        const defaultAddr = list.find((a: any) => a.is_default) ?? list[0];
        if (defaultAddr) {
          setSelectedId(defaultAddr.id ?? null);
          onSelect?.(defaultAddr.id ?? 0);
        }
      } catch (e) {
        if (!cancelled) {
          const msg = e instanceof Error ? e.message : "";
          if (msg.includes("401") || msg.includes("Failed to fetch")) {
            setError("请先登录以管理收货地址");
          } else {
            setError("加载地址失败");
          }
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const selected = addresses.find((a) => a.id === selectedId);

  // ── Loading ──
  if (loading) {
    return <div className="h-16 animate-pulse rounded-xl bg-muted" />;
  }

  // ── Not logged in ──
  if (error === "请先登录以管理收货地址") {
    return (
      <div className="rounded-xl border bg-white px-6 py-5">
        <div className="flex items-center gap-3">
          <MapPin className="size-5 text-muted-foreground/40" />
          <p className="text-sm text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  // ── No addresses ──
  if (!error && addresses.length === 0) {
    return (
      <div
        className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 px-6 py-5 transition-colors hover:border-muted-foreground/40"
        onClick={onAddNew}
      >
        <div className="flex size-10 items-center justify-center rounded-full bg-muted">
          <Plus className="size-5 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">请添加收货地址</p>
          <p className="text-xs text-muted-foreground/60">填写收货信息以便卖家发货</p>
        </div>
        <ChevronRight className="size-4 text-muted-foreground/40" />
      </div>
    );
  }

  // ── Error ──
  if (error) {
    return (
      <div className="rounded-xl border bg-white px-6 py-5">
        <div className="flex items-center gap-3">
          <MapPin className="size-5 text-muted-foreground/40" />
          <p className="text-sm text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  // ── Has addresses ──
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      {/* Selected address header */}
      <div
        className="flex cursor-pointer items-start gap-3 px-6 py-5 transition-colors hover:bg-muted/20"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <MapPin className="size-5 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          {selected ? (
            <>
              <p className="text-sm font-medium">
                {selected.consignee} {selected.phone}
                {selected.is_default && (
                  <span className="ml-2 rounded bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary">
                    默认
                  </span>
                )}
              </p>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                {selected.province}
                {selected.city}
                {selected.district}
                {selected.detail}
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-medium text-muted-foreground">选择收货地址</p>
            </>
          )}
        </div>
        <div className="shrink-0 pt-1">
          {expanded ? (
            <ChevronDown className="size-4 text-muted-foreground/40" />
          ) : (
            <ChevronRight className="size-4 text-muted-foreground/40" />
          )}
        </div>
      </div>

      {/* Expanded list */}
      {expanded && (
        <div className="border-t">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`flex cursor-pointer items-start gap-3 px-6 py-4 transition-colors hover:bg-muted/10 ${
                addr.id === selectedId ? "bg-primary/5" : ""
              }`}
              onClick={() => {
                setSelectedId(addr.id ?? null);
                onSelect?.(addr.id ?? 0);
                setExpanded(false);
              }}
            >
              <div
                className={`mt-1 size-4 shrink-0 rounded-full border-2 ${
                  addr.id === selectedId
                    ? "border-primary bg-primary"
                    : "border-muted-foreground/30"
                }`}
              >
                {addr.id === selectedId && <div className="m-0.5 size-2.5 rounded-full bg-white" />}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">
                  {addr.consignee} {addr.phone}
                  {addr.is_default && (
                    <span className="ml-2 rounded bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary">
                      默认
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {addr.province}
                  {addr.city}
                  {addr.district}
                  {addr.detail}
                </p>
              </div>
            </div>
          ))}
          <div
            className="flex cursor-pointer items-center gap-2 border-t px-6 py-4 text-sm text-primary transition-colors hover:bg-muted/10"
            onClick={onAddNew}
          >
            <Plus className="size-4" />
            添加新地址
          </div>
        </div>
      )}
    </div>
  );
}
