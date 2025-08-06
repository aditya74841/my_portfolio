


import React, { useState, useEffect, useCallback } from 'react';
import AnalyticsHeader from './components/AnalyticsHeader';
import FilterSection from './components/FilterSection';
import StatsCards from './components/StatsCard';
import ChartsGrid from './components/ChartGrid';
import TopQuestionsTable from './components/TopQuestionsTable';
import RecentQuestions from './components/RecentQuestion';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';

// Dummy data for fallback
const DUMMY_DATA = [
  // ...your dummy data array...
];

const Analytics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [useDummyData, setUseDummyData] = useState(false);
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    search: ''
  });
  const [stats, setStats] = useState({
    totalQuestions: 0,
    uniqueUsers: 0,
    avgResponseLength: 0,
    topQuestions: [],
    dailyStats: [],
    hourlyStats: [],
    ipStats: [],
    questionTypes: []
  });

  // Apply filters to dummy data
  const applyFiltersToData = useCallback((rawData) => {
    let filteredData = [...rawData];

    if (filters.search) {
      filteredData = filteredData.filter(item =>
        item.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.startDate) {
      filteredData = filteredData.filter(item =>
        new Date(item.createdAt) >= new Date(filters.startDate)
      );
    }
    if (filters.endDate) {
      const endDate = new Date(filters.endDate);
      endDate.setHours(23, 59, 59, 999); // End of day
      filteredData = filteredData.filter(item =>
        new Date(item.createdAt) <= endDate
      );
    }
    return filteredData;
  }, [filters]);

  // Calculate statistics from dummy data
  const calculateStats = useCallback((rawData) => {
    if (!rawData.length) {
      setStats({
        totalQuestions: 0,
        uniqueUsers: 0,
        avgResponseLength: 0,
        topQuestions: [],
        dailyStats: [],
        hourlyStats: [],
        ipStats: [],
        questionTypes: []
      });
      return;
    }

    const totalQuestions = rawData.length;
    const uniqueUsers = new Set(rawData.map(item => item.ipAddress)).size;
    const avgResponseLength = rawData.reduce((acc, item) => acc + item.response.length, 0) / totalQuestions;

    // Top questions
    const questionCounts = {};
    rawData.forEach(item => {
      const question = item.title.toLowerCase();
      questionCounts[question] = (questionCounts[question] || 0) + 1;
    });
    const topQuestions = Object.entries(questionCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([question, count]) => ({ question, count }));

    // Daily stats
    const dailyData = {};
    rawData.forEach(item => {
      const date = new Date(item.createdAt).toDateString();
      dailyData[date] = (dailyData[date] || 0) + 1;
    });
    const dailyStats = Object.entries(dailyData)
      .map(([date, count]) => ({
        date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        count
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    // Hourly stats
    const hourlyData = Array(24).fill(0);
    rawData.forEach(item => {
      const hour = new Date(item.createdAt).getHours();
      hourlyData[hour]++;
    });
    const hourlyStats = hourlyData.map((count, hour) => ({
      hour: `${hour.toString().padStart(2, '0')}:00`,
      count
    }));

    // IP stats
    const ipCounts = {};
    rawData.forEach(item => {
      ipCounts[item.ipAddress] = (ipCounts[item.ipAddress] || 0) + 1;
    });
    const ipStats = Object.entries(ipCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([ip, count]) => ({ ip, count }));

    // Question types
    const questionTypes = [
      {
        type: 'Skills',
        count: rawData.filter(item =>
          item.title.toLowerCase().includes('skill') ||
          item.title.toLowerCase().includes('technology') ||
          item.title.toLowerCase().includes('experience')
        ).length
      },
      {
        type: 'Projects',
        count: rawData.filter(item =>
          item.title.toLowerCase().includes('project') ||
          item.title.toLowerCase().includes('work') ||
          item.title.toLowerCase().includes('built')
        ).length
      },
      {
        type: 'Contact',
        count: rawData.filter(item =>
          item.title.toLowerCase().includes('contact') ||
          item.title.toLowerCase().includes('email') ||
          item.title.toLowerCase().includes('available')
        ).length
      },
      {
        type: 'Technical',
        count: rawData.filter(item =>
          item.title.toLowerCase().includes('database') ||
          item.title.toLowerCase().includes('react') ||
          item.title.toLowerCase().includes('mobile') ||
          item.title.toLowerCase().includes('ai')
        ).length
      },
      {
        type: 'General',
        count: rawData.filter(item =>
          !item.title.toLowerCase().includes('skill') &&
          !item.title.toLowerCase().includes('project') &&
          !item.title.toLowerCase().includes('contact') &&
          !item.title.toLowerCase().includes('database') &&
          !item.title.toLowerCase().includes('react') &&
          !item.title.toLowerCase().includes('mobile') &&
          !item.title.toLowerCase().includes('ai')
        ).length
      }
    ].filter(type => type.count > 0);

    setStats({
      totalQuestions,
      uniqueUsers,
      avgResponseLength: Math.round(avgResponseLength),
      topQuestions,
      dailyStats,
      hourlyStats,
      ipStats,
      questionTypes
    });
  }, []);

  // Fetch analytics data, wrapped in useCallback
  const fetchAnalytics = useCallback(async () => {
    try {
      setLoading(true);
      setError('');

      // Try to fetch from API first
      const response = await fetch('https://portfolio-server-8zb7.onrender.com/api/v1/ai/analytics/detailed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(filters)
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();

      if (result.success && result.analytics) {
        setData(result.analytics.recentQuestions || []);
        setStats({
          totalQuestions: result.analytics.totalQuestions || 0,
          uniqueUsers: result.analytics.uniqueUsers || 0,
          avgResponseLength: result.analytics.avgResponseLength || 0,
          topQuestions: Array.isArray(result.analytics.topQuestions) ? result.analytics.topQuestions : [],
          dailyStats: Array.isArray(result.analytics.dailyStats) ? result.analytics.dailyStats : [],
          hourlyStats: Array.isArray(result.analytics.hourlyStats) ? result.analytics.hourlyStats : [],
          ipStats: Array.isArray(result.analytics.ipStats) ? result.analytics.ipStats : [],
          questionTypes: Array.isArray(result.analytics.questionTypes) ? result.analytics.questionTypes : []
        });
        setUseDummyData(false);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      console.warn('API failed, using dummy data:', err.message);
      // Fallback to dummy data
      const filteredData = applyFiltersToData(DUMMY_DATA);
      setData(filteredData);
      calculateStats(filteredData);
      setUseDummyData(true);
      setError('');
    } finally {
      setLoading(false);
    }
  }, [filters, applyFiltersToData, calculateStats]);

  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    fetchAnalytics();
  };

  const resetFilters = () => {
    setFilters({ startDate: '', endDate: '', search: '' });
    setTimeout(() => fetchAnalytics(), 100);
  };

  const exportData = () => {
    const csvContent = "data:text/csv;charset=utf-8," +
      "Question,Response,IP Address,Created At\n" +
      data.map(row =>
        `"${row.title}","${row.response}","${row.ipAddress}","${row.createdAt}"`
      ).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "analytics_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error && !useDummyData) {
    return <ErrorDisplay error={error} onRetry={fetchAnalytics} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto">
        <AnalyticsHeader useDummyData={useDummyData} />
        <FilterSection
          filters={filters}
          onFilterChange={handleFilterChange}
          onApplyFilters={applyFilters}
          onResetFilters={resetFilters}
          onExportData={exportData}
        />
        <StatsCards stats={stats} />
        <ChartsGrid stats={stats} />
        <TopQuestionsTable stats={stats} />
        <RecentQuestions data={data} />
      </div>
    </div>
  );
};

export default Analytics;
