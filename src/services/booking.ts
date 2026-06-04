import api from './api';
import { PriceEstimateRequest, BookingData, ReviewData, ComplaintData, WarrantyClaimData } from '../types/booking';

// === General Booking Endpoints ===

export const getPriceEstimate = async (data: PriceEstimateRequest) => {
  const response = await api.post('/price-estimate', data);
  return response.data.data;
};

export const getBookingDetail = async (id: number) => {
  const response = await api.get(`/bookings/${id}`);
  return response.data.data;
};


// === Customer Booking Endpoints ===

export const createBooking = async (data: BookingData) => {
  const response = await api.post('/bookings', data);
  return response.data.data;
};

export const getCustomerBookings = async () => {
  const response = await api.get('/customer/bookings');
  return response.data.data;
};

export const cancelBooking = async (id: number) => {
  const response = await api.post(`/bookings/${id}/cancel`);
  return response.data;
};

export const payForBookingMock = async (id: number, method: 'transfer' | 'qris' | 'ewallet' | 'cod') => {
    const response = await api.post(`/bookings/${id}/pay/mock`, { method });
    return response.data.data;
}

export const reviewBooking = async (id: number, data: ReviewData) => {
  const response = await api.post(`/bookings/${id}/review`, data);
  return response.data.data;
};

export const complaintBooking = async (id: number, data: ComplaintData) => {
  const response = await api.post(`/bookings/${id}/complaint`, data);
  return response.data.data;
};

export const claimWarranty = async (id: number, data: WarrantyClaimData) => {
    const response = await api.post(`/bookings/${id}/warranty-claim`, data);
    return response.data.data;
}
