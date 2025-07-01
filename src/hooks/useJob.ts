import { useEffect, useState } from 'react';
import jobsData from '@/lib/utils/data.json';

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiStatus, setApiStatus] = useState<number | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (jobsData.status !== 200) {
          throw new Error(jobsData.message || 'Failed to fetch jobs');
        }
        
        setJobs(jobsData.data);
        setApiStatus(jobsData.status);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return { jobs, loading, error, status: apiStatus };
}