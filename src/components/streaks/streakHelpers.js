// Generate streak numbers array
export const generateStreakNumbers = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      value: i + 1,
      completed: false,
      completedAt: null,
    }));
  };
  
  // Calculate completion rate
  export const calculateCompletionRate = (completed, total) => {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
  };
  
  // Get max value from array
  export const getMaxValue = (arr, key) => {
    if (arr.length === 0) return 0;
    return Math.max(...arr.map((item) => item[key]));
  };
  