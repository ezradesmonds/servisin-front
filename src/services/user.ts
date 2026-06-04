import api from './api';
import { User, NewAddress, Address } from '../types/user';

/**
 * Fetches the current authenticated user's profile.
 */
export const getMyProfile = async (): Promise<{user: User, profile: any}> => {
  const response = await api.get('/me');
  return response.data.data;
};

/**
 * Updates the current authenticated user's profile.
 * Can be used by both customers and technicians.
 */
export const updateMyProfile = async (data: { name?: string; phone?: string; avatar?: string }): Promise<User> => {
  const response = await api.put('/customer/profile', data); // Endpoint is the same for technician based on route grouping
  return response.data.data;
};

/**
 * Fetches the addresses for the current customer.
 */
export const getMyAddresses = async (): Promise<Address[]> => {
  const response = await api.get('/customer/addresses');
  return response.data.data;
};

/**
 * Adds a new address for the current customer.
 */
export const addMyAddress = async (data: NewAddress): Promise<Address> => {
  const response = await api.post('/customer/addresses', data);
  return response.data.data;
};

/**
 * Validates a partnership code.
 */
export const validatePartnership = async (code: string): Promise<{ valid: boolean; partnership: any; badge: string | null }> => {
  const response = await api.post('/customer/partnership/validate', { code });
  return response.data;
};
