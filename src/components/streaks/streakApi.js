import axios from 'axios';
import { LOCAL_SERVER_API_URL } from '../../constant';

// API Configuration
// const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = LOCAL_SERVER_API_URL;

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API Service Layer
export const streakAPI = {
  // Create Streak
  createStreak: (data) => api.post('/streak', data),

  // Get All Streaks
  getStreaks: (params) => api.get('/streak', { params }),

  // Get Streak by ID
  getStreakById: (id) => api.get(`/streak/${id}`),

  // Update Streak
  updateStreak: (id, data) => api.put(`/streak/${id}`, data),

  // Delete Streak
  deleteStreak: (id) => api.delete(`/streak/${id}`),

  // Mark Streak Complete
  markComplete: (id, streakValue) => 
    api.post(`/streak/${id}/complete`, { streakValue }),

  // Reset Streak
  resetStreak: (id) => api.post(`/streak/${id}/reset`),

  // Increment Streak Numbers
  incrementStreak: (id, count) => 
    api.post(`/streak/${id}/increment`, { count }),

  // Get Streak Stats
  getStats: (id) => api.get(`/streak/${id}/stats`),

  // Get Streak Count
  getCount: (params) => api.get('/streak/count', { params }),
};

// Error interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'Something went wrong';
    console.error('API Error:', message);
    return Promise.reject(error);
  }
);

export default api;
