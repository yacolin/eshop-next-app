export interface AddressData {
  id: number;
  user_id: number;
  consignee: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  detail: string;
  zip_code: string;
  is_default: boolean;
  created_at: number;
  updated_at: number;
}

export interface AddressListData {
  total: number;
  list: AddressData[];
}

export interface CreateAddressRequest {
  consignee: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  detail: string;
  zip_code?: string;
  is_default?: boolean;
}

export interface UpdateAddressRequest {
  consignee?: string;
  phone?: string;
  province?: string;
  city?: string;
  district?: string;
  detail?: string;
  zip_code?: string;
  is_default?: boolean;
}
