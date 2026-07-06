"use client";

import { useState } from "react";
import { Address } from "@/lib/api-gen/Address";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, XCircle } from "lucide-react";
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

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved: () => void;
}

export function AddressForm({ open, onOpenChange, onSaved }: Props) {
  const [consignee, setConsignee] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [detail, setDetail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSave() {
    if (!consignee || !phone || !province || !city || !district || !detail) return;
    setSaving(true);
    try {
      await new Address({ baseUrl: "" }).v1AddressesCreate({
        consignee,
        phone,
        province,
        city,
        district,
        detail,
        zip_code: zipCode || undefined,
        is_default: isDefault ? 1 : undefined,
      });
      onSaved();
      onOpenChange(false);
      resetForm();
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "保存地址失败");
    } finally {
      setSaving(false);
    }
  }

  function resetForm() {
    setConsignee("");
    setPhone("");
    setProvince("");
    setCity("");
    setDistrict("");
    setDetail("");
    setZipCode("");
    setIsDefault(false);
  }

  const canSave = consignee && phone && province && city && district && detail;

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="flex flex-col">
          <SheetHeader>
            <SheetTitle>添加收货地址</SheetTitle>
            <SheetDescription>请填写收货信息</SheetDescription>
          </SheetHeader>

          <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-4 pt-2">
            <div className="space-y-1.5">
              <Label>收货人</Label>
              <Input
                placeholder="请输入收货人姓名"
                value={consignee}
                onChange={(e) => setConsignee(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>手机号</Label>
              <Input
                placeholder="请输入手机号"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>省份</Label>
              <Input
                placeholder="请输入省份"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>城市</Label>
              <Input
                placeholder="请输入城市"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>区/县</Label>
              <Input
                placeholder="请输入区/县"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>详细地址</Label>
              <Input
                placeholder="请输入详细地址"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>邮编（选填）</Label>
              <Input
                placeholder="请输入邮编"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={isDefault}
                onChange={(e) => setIsDefault(e.target.checked)}
                className="size-4 accent-primary"
              />
              设为默认地址
            </label>
          </div>

          <div className="flex gap-3 border-t p-4">
            <Button
              variant="outline"
              className="flex-1 cursor-pointer"
              onClick={() => onOpenChange(false)}
            >
              取消
            </Button>
            <Button
              className="flex-1 cursor-pointer"
              onClick={handleSave}
              disabled={!canSave || saving}
            >
              {saving && <Loader2 className="mr-1 size-4 animate-spin" />}
              保存
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <AlertDialog open={errorMsg !== null} onOpenChange={() => setErrorMsg(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <XCircle className="size-6 text-destructive" />
            </AlertDialogMedia>
            <AlertDialogTitle>保存失败</AlertDialogTitle>
            <AlertDialogDescription>{errorMsg}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setErrorMsg(null)}>知道了</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
