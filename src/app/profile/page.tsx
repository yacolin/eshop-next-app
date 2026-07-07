"use client";

import { useState, useEffect, use, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { fetchUserProfile, fetchUpdateProfile, fetchOrders } from "@/lib/api";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronRight, Home, User, Package, Loader2, CheckCircle } from "lucide-react";
import AddressesTab from "@/app/profile/components/addresses-tab";

const genderLabels: Record<number, string> = {
  0: "Unknown",
  1: "Male",
  2: "Female",
};

const statusLabels: Record<string, string> = {
  pending: "Pending",
  paid: "Paid",
  shipped: "Shipped",
  delivered: "Delivered",
  completed: "Completed",
  cancelled: "Cancelled",
  closed: "Closed",
  refunding: "Refunding",
  refunded: "Refunded",
};

const statusColors: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  paid: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-muted text-muted-foreground",
  closed: "bg-muted text-muted-foreground",
  refunding: "bg-rose-100 text-rose-700",
  refunded: "bg-rose-100 text-rose-700",
};

function formatDate(ts: string | undefined) {
  if (!ts) return "";
  return new Date(ts).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function ProfileTab() {
  const { isAuthenticated, loading: authLoading } = useAuth();

  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [editing, setEditing] = useState(false);
  const [nickname, setNickname] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState(0);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (authLoading) return;
    if (!isAuthenticated) {
      setLoading(false);
      setError("Please login first");
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchUserProfile();
        if (cancelled) return;
        setProfile(data);
        setNickname(data?.nickname ?? "");
        setBio(data?.info?.bio ?? "");
        setGender(data?.info?.gender ?? 0);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load profile");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isAuthenticated, authLoading]);

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    try {
      const data: Record<string, unknown> = {};
      if (nickname !== (profile?.nickname ?? "")) data.nickname = nickname;
      if (gender !== (profile?.info?.gender ?? 0)) data.gender = gender;
      if (bio !== (profile?.info?.bio ?? "")) data.bio = bio;
      if (Object.keys(data).length === 0) {
        setEditing(false);
        return;
      }
      await fetchUpdateProfile(data);
      setProfile((prev: any) => ({
        ...prev,
        nickname: data.nickname ?? prev?.nickname,
        info: {
          ...prev?.info,
          ...(data.gender !== undefined ? { gender: data.gender } : {}),
          ...(data.bio !== undefined ? { bio: data.bio } : {}),
        },
      }));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
      setEditing(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to update");
    } finally {
      setSaving(false);
    }
  }

  if (authLoading || loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error === "Please login first") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
        <User className="mb-4 size-12 text-muted-foreground/30" />
        <p className="mb-1">Please login to view your profile</p>
        <Button variant="outline" className="mt-4 cursor-pointer" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <Package className="mb-4 size-12 text-muted-foreground/30" />
        <p className="text-destructive">{error || "Profile not found"}</p>
      </div>
    );
  }

  const info = profile.info ?? {};

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="size-5" />
          Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        {editing ? (
          <form onSubmit={handleSave} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="nickname">Nickname</Label>
              <Input
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                disabled={saving}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Input
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                disabled={saving}
                placeholder="Tell us about yourself"
              />
            </div>

            <div className="space-y-2">
              <Label>Gender</Label>
              <div className="flex gap-3">
                {[0, 1, 2].map((v) => (
                  <label
                    key={v}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-colors ${
                      gender === v ? "border-primary bg-primary/5 text-primary" : "hover:bg-muted"
                    }`}
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={v}
                      checked={gender === v}
                      onChange={() => setGender(v)}
                      className="sr-only"
                    />
                    {genderLabels[v]}
                  </label>
                ))}
              </div>
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <div className="flex gap-3">
              <Button type="submit" className="cursor-pointer" disabled={saving}>
                {saving ? "Saving..." : "Save"}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="cursor-pointer"
                onClick={() => setEditing(false)}
                disabled={saving}
              >
                Cancel
              </Button>
            </div>

            {saved && (
              <p className="flex items-center gap-1.5 text-sm text-green-600">
                <CheckCircle className="size-4" />
                Saved successfully
              </p>
            )}
          </form>
        ) : (
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs text-muted-foreground">Username</p>
                <p className="text-sm font-medium">{profile.username || "-"}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Nickname</p>
                <p className="text-sm font-medium">{profile.nickname || "-"}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">
                  {profile.email || "-"}
                  {profile.email_verified ? (
                    <span className="ml-2 text-[10px] text-green-600">Verified</span>
                  ) : null}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium">{profile.phone || "-"}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Gender</p>
                <p className="text-sm font-medium">
                  {info.gender !== undefined ? genderLabels[info.gender] || "-" : "-"}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Bio</p>
                <p className="text-sm font-medium">{info.bio || "-"}</p>
              </div>
            </div>

            <Button variant="outline" className="cursor-pointer" onClick={() => setEditing(true)}>
              Edit Profile
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function OrdersTab({
  status,
  onStatusChange,
}: {
  status: string | null;
  onStatusChange: (s: string | null) => void;
}) {
  const [orders, setOrders] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pageSize = 10;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchOrders({
          page,
          page_size: pageSize,
          ...(status ? { status } : {}),
        });
        if (cancelled) return;
        setOrders(data?.list ?? []);
        setTotal(data?.total ?? 0);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load orders");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [page, status]);

  const totalPages = Math.ceil(total / pageSize);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <Package className="mb-4 size-12 text-muted-foreground/30" />
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="size-5" />
          My Orders
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap gap-2">
          {[null, "pending", "paid", "shipped", "delivered", "completed", "cancelled"].map((s) => (
            <button
              key={s ?? "all"}
              onClick={() => {
                onStatusChange(s);
                setPage(1);
              }}
              className={`cursor-pointer rounded-full px-3.5 py-1 text-xs font-medium transition-colors ${
                status === s
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {s ? statusLabels[s] || s : "All"}
            </button>
          ))}
        </div>

        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <Package className="mb-3 size-10 text-muted-foreground/30" />
            <p className="text-sm">No orders found</p>
            <Button variant="outline" className="mt-4 cursor-pointer" asChild>
              <Link href="/">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {orders.map((order) => (
              <Link
                key={order.id}
                href={`/profile/orders/${order.order_no}`}
                className="block rounded-lg border p-4 transition-colors hover:bg-muted/30"
              >
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">
                        {order.order_no}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColors[order.status] || "bg-muted"}`}
                      >
                        {statusLabels[order.status] || order.status}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm">
                      <span className="font-semibold">{formatPrice(order.total_amount ?? 0)}</span>
                      <span className="mx-1.5 text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(order.created_at)}
                      </span>
                    </p>
                  </div>
                  <ChevronRight className="size-4 shrink-0 text-muted-foreground/40" />
                </div>
              </Link>
            ))}

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-4">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="cursor-pointer rounded-lg border px-3 py-1.5 text-xs transition-colors hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Prev
                </button>
                <span className="text-xs text-muted-foreground">
                  {page} / {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="cursor-pointer rounded-lg border px-3 py-1.5 text-xs transition-colors hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface PageProps {
  searchParams: Promise<{ tab?: string; status?: string }>;
}

export default function ProfilePage({ searchParams }: PageProps) {
  const { tab, status } = use(searchParams);
  const router = useRouter();
  const activeTab = tab === "orders" ? "orders" : tab === "addresses" ? "addresses" : "profile";

  return (
    <div className="min-h-screen bg-zinc-50 py-6 dark:bg-black">
      <div className="mx-auto max-w-3xl px-4">
        <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <Home className="size-3.5" />
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground">Profile</span>
        </nav>

        <Tabs
          value={activeTab}
          onValueChange={(v) =>
            router.replace(
              `/profile?tab=${v}${v === "orders" && status ? `&status=${status}` : ""}`,
            )
          }
        >
          <TabsList className="mb-6">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <ProfileTab />
          </TabsContent>

          <TabsContent value="orders">
            <OrdersTab
              status={status ?? null}
              onStatusChange={(s) =>
                router.replace(`/profile?tab=orders${s ? `&status=${s}` : ""}`)
              }
            />
          </TabsContent>

          <TabsContent value="addresses">
            <AddressesTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
