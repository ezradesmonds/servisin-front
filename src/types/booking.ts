// Based on ServisinController.php

export interface PriceEstimateRequest {
  service_problem_type_id: number;
  is_emergency?: boolean;
  partnership_code?: string;
}

export interface BookingData {
  service_category_id: number;
  service_problem_type_id: number;
  booking_date: string; // e.g., '2026-07-21'
  booking_time: string; // e.g., '14:30'
  address_id: number;
  notes?: string;
  is_emergency: boolean;
  // Based on StoreBookingRequest, other fields might be needed
}

export interface ReviewData {
  rating: number; // 1-5
  comment?: string;
}

export interface ComplaintData {
  reason: string;
  description?: string;
}

export interface WarrantyClaimData {
  description: string;
}
