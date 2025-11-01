import { useState, useEffect, useCallback } from 'react';
import { streakAPI } from './streakApi';

export const useStreaks = () => {
  const [streaks, setStreaks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all streaks
  const fetchStreaks = useCallback(async (params = { page: 1, limit: 100 }) => {
    try {
      setLoading(true);
      setError(null);
      const response = await streakAPI.getStreaks(params);
      setStreaks(response.data.data.docs || []);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch streaks');
      console.error('Error fetching streaks:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Create new streak
  const createStreak = async (data) => {
    try {
      setLoading(true);
      setError(null);
      await streakAPI.createStreak(data);
      await fetchStreaks();
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to create streak';
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  // Update streak
  const updateStreak = async (id, data) => {
    try {
      setLoading(true);
      setError(null);
      await streakAPI.updateStreak(id, data);
      await fetchStreaks();
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update streak';
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  // Delete streak
  const deleteStreak = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await streakAPI.deleteStreak(id);
      await fetchStreaks();
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to delete streak';
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  // Mark streak complete
  const markComplete = async (id, streakValue) => {
    try {
      setError(null);
      await streakAPI.markComplete(id, streakValue);
      await fetchStreaks();
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to mark complete';
      setError(message);
      return { success: false, error: message };
    }
  };

  // Reset streak
  const resetStreak = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await streakAPI.resetStreak(id);
      await fetchStreaks();
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to reset streak';
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  // Increment streak numbers
  const incrementStreak = async (id, count) => {
    try {
      setLoading(true);
      setError(null);
      await streakAPI.incrementStreak(id, count);
      await fetchStreaks();
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to increment streak';
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  // Fetch streaks on mount
  useEffect(() => {
    fetchStreaks();
  }, [fetchStreaks]);

  return {
    streaks,
    loading,
    error,
    fetchStreaks,
    createStreak,
    updateStreak,
    deleteStreak,
    markComplete,
    resetStreak,
    incrementStreak,
  };
};
