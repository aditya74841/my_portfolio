import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useHealthCheck = (url) => {
  const [serverMessage, setServerMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const healthCheck = async () => {
      try {
        const response = await axios.get(url);
        setServerMessage(response.data.message);
        setLoading(false);
        setError(null);

        // Stop polling once we get a successful response
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      } catch (err) {
        setServerMessage('Server offline');
        setError(err.message || 'Connection failed');
        setLoading(false);
      }
    };

    // Initial health check
    healthCheck();

    // Start polling every 2 seconds if not already started
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        // Only continue polling if we haven't received a successful response
        if (serverMessage === '' || serverMessage === 'Server offline') {
          healthCheck();
        }
      }, 2000);
    }

    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [url, serverMessage]);

  return { serverMessage, loading, error };
};

export default useHealthCheck;
