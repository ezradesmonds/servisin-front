import { useState, useEffect } from 'react';
import { getCategories } from '@/services/category';
import { ServiceCategory } from '@/types/category';

export const useServices = () => {
  const [services, setServices] = useState<ServiceCategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const data = await getCategories();
        setServices(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch services');
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, isLoading, error };
};
