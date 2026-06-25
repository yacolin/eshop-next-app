"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { fetchProductDetail, submitOrder } from "@/lib/api";
import type { ProductDetailResponse, SKUResponse } from "@/types/product";
import type { CheckoutItem } from "@/types/order";
import { CheckoutHeader } from "./components/checkout-header";
import { AddressPicker } from "./components/address-picker";
import { AddressForm } from "./components/address-form";
import { OrderItems } from "./components/order-items";
import { PriceSummary } from "./components/price-summary";
import { CouponSection } from "./components/coupon-section";
import { OrderNote } from "./components/order-note";
import { SubmitButton } from "./components/submit-button";
import { Package, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

interface Props {
  searchParams: Promise<{
    product_id?: string;
    sku_id?: string;
    quantity?: string;
    flash_price?: string;
  }>;
}

export default function CheckoutPage({ searchParams }: Props) {
  const params = use(searchParams);
  const productId = params.product_id ? Number(params.product_id) : null;
  const skuId = params.sku_id ? Number(params.sku_id) : null;
  const quantity = Math.max(1, Math.floor(Number(params.quantity) || 1));
  const flashPrice = params.flash_price ? Number(params.flash_price) : null;

  const [detail, setDetail] = useState<ProductDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressRefreshKey, setAddressRefreshKey] = useState(0);
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [resultDialog, setResultDialog] = useState<{
    type: "success" | "error";
    orderNo?: string;
    message?: string;
  } | null>(null);
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    if (!productId || !skuId) {
      setLoading(false);
      setError("订单参数错误");
      return;
    }
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProductDetail(productId);
        if (cancelled) return;
        setDetail(data);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "加载订单信息失败");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [productId, skuId]);

  // Find the specific SKU by ID
  const matchedSku: SKUResponse | null = detail
    ? (detail.skus.find((s) => s.id === skuId) ?? null)
    : null;

  // Unit price: flash_price > sku price > min_price
  const unitPrice = flashPrice ?? matchedSku?.price ?? detail?.product.min_price ?? 0;

  // Construct checkout item
  const checkoutItem: CheckoutItem | null =
    detail && matchedSku
      ? {
          sku_id: matchedSku.id,
          product_name: detail.product.name,
          sku_name: matchedSku.name,
          spec: matchedSku.spec ?? {},
          price: unitPrice,
          quantity,
          stock: matchedSku.available_quantity ?? 0,
        }
      : null;

  const subtotal = unitPrice * quantity;
  const shippingFee = 0; // 默认包邮
  const couponDiscount = 0; // 占位
  const total = subtotal + shippingFee - couponDiscount;

  async function handleSubmit() {
    if (!selectedAddressId) {
      setResultDialog({ type: "error", message: "请选择收货地址" });
      return;
    }
    if (!matchedSku) return;
    setSubmitting(true);
    try {
      const userId = localStorage.getItem("user_id");
      const result = await submitOrder({
        customer_id: userId || "0",
        address_id: selectedAddressId,
        items: [{ sku_id: matchedSku.id, quantity }],
      });
      setResultDialog({ type: "success", orderNo: result.order_no });
    } catch (e) {
      setResultDialog({
        type: "error",
        message: e instanceof Error ? e.message : "提交订单失败",
      });
    } finally {
      setSubmitting(false);
    }
  }

  // ── Loading state ──
  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50">
        <CheckoutHeader />
        <div className="mx-auto max-w-5xl px-4 py-6">
          <div className="flex gap-6">
            <div className="flex-1 space-y-4">
              <div className="h-24 animate-pulse rounded-xl bg-muted" />
              <div className="h-32 animate-pulse rounded-xl bg-muted" />
              <div className="h-16 animate-pulse rounded-xl bg-muted" />
            </div>
            <div className="w-96 space-y-4">
              <div className="h-48 animate-pulse rounded-xl bg-muted" />
              <div className="h-16 animate-pulse rounded-xl bg-muted" />
              <div className="h-24 animate-pulse rounded-xl bg-muted" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Error / Missing params state ──
  if (error || !detail || !matchedSku) {
    return (
      <div className="min-h-screen bg-zinc-50">
        <CheckoutHeader />
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <Package className="mx-auto mb-4 size-16 text-muted-foreground/30" />
            <p className="mb-1 text-destructive">{error || "订单信息加载失败"}</p>
            <p className="mb-4 text-sm text-muted-foreground">请返回商品页面重新选择</p>
            <Button variant="outline" className="cursor-pointer" asChild>
              <Link href="/">返回首页</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // ── Main layout ──
  return (
    <div className="min-h-screen bg-zinc-50">
      <CheckoutHeader />
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left column */}
          <div className="flex-1 space-y-4">
            <AddressPicker
              key={addressRefreshKey}
              onAddNew={() => setShowAddressForm(true)}
              onSelect={(id) => setSelectedAddressId(id)}
            />
            <OrderItems items={[checkoutItem!]} />
            <OrderNote />
          </div>

          {/* Right column - sticky sidebar */}
          <div className="w-full shrink-0 space-y-4 lg:w-96">
            <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
              <PriceSummary
                subtotal={subtotal}
                shippingFee={shippingFee}
                couponDiscount={couponDiscount}
                total={total}
              />
              <CouponSection />
              <SubmitButton totalAmount={total} loading={submitting} onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <AddressForm
        open={showAddressForm}
        onOpenChange={setShowAddressForm}
        onSaved={() => setAddressRefreshKey((k) => k + 1)}
      />

      {/* Result dialog */}
      <AlertDialog
        open={resultDialog !== null}
        onOpenChange={(open) => {
          if (!open) {
            if (resultDialog?.type === "success") router.push("/");
            setResultDialog(null);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              {resultDialog?.type === "success" ? (
                <CheckCircle className="size-6 text-green-500" />
              ) : (
                <XCircle className="size-6 text-destructive" />
              )}
            </AlertDialogMedia>
            <AlertDialogTitle>
              {resultDialog?.type === "success" ? "下单成功" : "提交失败"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {resultDialog?.type === "success"
                ? `订单号: ${resultDialog.orderNo}`
                : resultDialog?.message}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => {
                if (resultDialog?.type === "success") router.push("/");
                setResultDialog(null);
              }}
            >
              {resultDialog?.type === "success" ? "继续购物" : "知道了"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
