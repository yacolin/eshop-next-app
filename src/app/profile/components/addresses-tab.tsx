"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/contexts/auth-context";
import { fetchAddresses, fetchUpdateAddress, fetchDeleteAddress } from "@/lib/api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Loader2, User, Package, MapPin, Star, Pencil, Trash2, AlertTriangle } from "lucide-react";
import { AddressForm } from "@/app/checkout/components/address-form";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

export default function AddressesTab() {
  const { isAuthenticated } = useAuth();
  const [addresses, setAddresses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingAddr, setEditingAddr] = useState<any | null>(null);
  const [creatingNew, setCreatingNew] = useState(false);
  const [defaultConfirmAddr, setDefaultConfirmAddr] = useState<any | null>(null);
  const [deleteConfirmAddr, setDeleteConfirmAddr] = useState<any | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchAddresses();
      setAddresses(data?.list ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load addresses");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(false);
      setError("Please login first");
      return;
    }
    load();
  }, [isAuthenticated, load]);

  async function handleSetDefault(id: number) {
    try {
      await fetchUpdateAddress(id, { is_default: 1 });
      await load();
    } catch {
      // silent
    }
  }

  async function handleDelete(id: number) {
    try {
      await fetchDeleteAddress(id);
      await load();
    } catch {
      // silent
    }
  }

  if (loading) {
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
        <p>Please login to manage addresses</p>
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
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="size-5" />
            Addresses
          </CardTitle>
          <button
            onClick={() => setCreatingNew(true)}
            className="cursor-pointer rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            + Add New
          </button>
        </div>
      </CardHeader>
      <CardContent>
        {addresses.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <MapPin className="mb-3 size-10 text-muted-foreground/30" />
            <p className="text-sm">No addresses saved</p>
          </div>
        ) : (
          <div className="space-y-3">
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className={`rounded-lg border p-4 transition-colors ${
                  addr.is_default ? "border-primary/30 bg-primary/5" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium">
                        {addr.consignee}
                        <span className="ml-2 font-normal text-muted-foreground">{addr.phone}</span>
                      </p>
                      {addr.is_default ? (
                        <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                          Default
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {[addr.province, addr.city, addr.district, addr.detail]
                        .filter(Boolean)
                        .join(" ")}
                    </p>
                    {addr.tag && (
                      <span className="mt-1 inline-block rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                        {addr.tag}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  {!addr.is_default && (
                    <button
                      onClick={() => setDefaultConfirmAddr(addr)}
                      className="flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted"
                    >
                      <Star className="size-3" />
                      Set Default
                    </button>
                  )}
                  <button
                    onClick={() => setEditingAddr(addr)}
                    className="flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted"
                  >
                    <Pencil className="size-3" />
                    Edit
                  </button>
                  <button
                    onClick={() => setDeleteConfirmAddr(addr)}
                    className="flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 text-xs text-red-500 transition-colors hover:bg-red-50"
                  >
                    <Trash2 className="size-3" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <AddressForm
          open={editingAddr !== null}
          onOpenChange={(open) => {
            if (!open) setEditingAddr(null);
          }}
          onSaved={() => {
            setEditingAddr(null);
            load();
          }}
          address={editingAddr}
        />
        <AddressForm
          open={creatingNew}
          onOpenChange={(open) => {
            if (!open) setCreatingNew(false);
          }}
          onSaved={() => {
            setCreatingNew(false);
            load();
          }}
        />
      </CardContent>

      <AlertDialog
        open={defaultConfirmAddr !== null}
        onOpenChange={() => setDefaultConfirmAddr(null)}
      >
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogMedia>
              <AlertTriangle className="size-5 text-amber-500" />
            </AlertDialogMedia>
            <AlertDialogTitle>Set as default</AlertDialogTitle>
            <AlertDialogDescription>
              <span>
                <strong>{defaultConfirmAddr?.consignee}</strong> {defaultConfirmAddr?.phone}
              </span>
              <br />
              <span>
                {[
                  defaultConfirmAddr?.province,
                  defaultConfirmAddr?.city,
                  defaultConfirmAddr?.district,
                ]
                  .filter(Boolean)
                  .join(" ")}
              </span>
              <br />
              <span className="text-muted-foreground">{defaultConfirmAddr?.detail}</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDefaultConfirmAddr(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (defaultConfirmAddr) handleSetDefault(defaultConfirmAddr.id);
                setDefaultConfirmAddr(null);
              }}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={deleteConfirmAddr !== null}
        onOpenChange={() => setDeleteConfirmAddr(null)}
      >
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogMedia>
              <AlertTriangle className="size-5 text-red-500" />
            </AlertDialogMedia>
            <AlertDialogTitle>Delete address</AlertDialogTitle>
            <AlertDialogDescription>
              <span>
                <strong>{deleteConfirmAddr?.consignee}</strong> {deleteConfirmAddr?.phone}
              </span>
              <br />
              <span>
                {[deleteConfirmAddr?.province, deleteConfirmAddr?.city, deleteConfirmAddr?.district]
                  .filter(Boolean)
                  .join(" ")}
              </span>
              <br />
              <span className="text-muted-foreground">{deleteConfirmAddr?.detail}</span>
              <br />
              <span className="text-destructive">This action cannot be undone.</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeleteConfirmAddr(null)}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={() => {
                if (deleteConfirmAddr) handleDelete(deleteConfirmAddr.id);
                setDeleteConfirmAddr(null);
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
