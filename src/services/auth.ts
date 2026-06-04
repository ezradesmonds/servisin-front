import api from './api';
import { LoginCredentials, RegisterData } from '../types/auth';
import { useAppStore } from '../store/useAppStore';

/**
 * Logs in a user and updates the global state on success.
 */
export const login = async (credentials: LoginCredentials) => {
  const response = await api.post('/login', credentials);
  const { token, user } = response.data;

  if (token && user) {
    useAppStore.getState().setToken(token);
    useAppStore.getState().setUser(user);
  }
  return response.data;
};

/**
 * Registers a new user and updates the global state on success.
 */
export const register = async (data: RegisterData) => {
  const response = await api.post('/register', data);
  const { token, user } = response.data;
  
  if (token && user) {
    useAppStore.getState().setToken(token);
    useAppStore.getState().setUser(user);
  }
  return response.data;
};

/**
 * Logs out the current user, clears the token from the server, and clears global state.
 */
export const logout = async () => {
  try {
    await api.post('/logout');
  } catch (error) {
    console.error("Logout failed, clearing state anyway.", error);
  } finally {
    useAppStore.getState().logout();
  }
};

export const getMe = () => {
  return api.get('/me');
};

export const sendOtp = (phone: string) => {
    return api.post('/mock/send-otp', { phone });
}

export const verifyOtp = (phone: string, code: string) => {
    return api.post('/mock/verify-otp', { phone, code });
}

export const forgotPassword = (email: string) => {
    return api.post('/forgot-password/mock', { email });
}

export const resetPassword = (password: string, token: string) => {
    return api.post('/reset-password/mock', { password, token });
}
