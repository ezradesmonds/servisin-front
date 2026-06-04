// Based on ServisinController.php

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  role: 'customer' | 'technician' | 'admin';
  avatar?: string | null;
}

export interface Address {
  id: number;
  user_id: number;
  label: string;
  address_line: string;
  city: string;
  district: string;
  postal_code?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  is_default: boolean | number;
}

export type NewAddress = Omit<Address, 'id' | 'user_id'>;
