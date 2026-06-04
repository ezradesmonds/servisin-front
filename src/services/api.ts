import axios from 'axios';
import { CONFIG } from '@/constants/Config';
import { useAppStore } from '@/store/useAppStore';

const api = axios.create({
  baseURL: CONFIG.API_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    // Get token from Zustand store on each request
    const token = useAppStore.getState().token;
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    // If 401 Unauthorized, logout the user
    if (error.response?.status === 401) {
      useAppStore.getState().logout();
      // Optionally, redirect to login screen
    }
    return Promise.reject(error);
  }
);

export default api;
