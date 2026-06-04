import api from './api';
import { ServiceCategory } from '../types/category';

export const getCategories = async (): Promise<ServiceCategory[]> => {
  const response = await api.get('/categories');
  // Assuming a Laravel Resource Collection which wraps the data in a 'data' key.
  // Adjust if your API response structure is different.
  return response.data.data;
};

export const getCategoryTechnicians = async (id: number) => {
  const response = await api.get(`/categories/${id}/technicians`);
  return response.data.data;
};
