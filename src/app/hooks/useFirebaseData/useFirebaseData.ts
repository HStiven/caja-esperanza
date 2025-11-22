import { useState, useEffect } from 'react';
import type { AdminConfig } from '../../pages/info/interface/typesInfo';
import { getAdminConfig } from '../../../firebase/adminIperations';

export const useFirebaseData = () => {
  const [data, setData] = useState<AdminConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const config = await getAdminConfig();
        setData(config);
      } catch (err) {
        setError('Error cargando datos de Firebase');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};