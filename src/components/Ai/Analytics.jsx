// import React, { useState, useEffect } from 'react';
// import { 
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
//   LineChart, Line, PieChart, Pie, Cell, AreaChart, Area 
// } from 'recharts';
// import { 
//   MessageSquare, Users, Clock, TrendingUp, Search, Filter, 
//   Download, Calendar, Globe, Activity, Eye, BarChart3 
// } from 'lucide-react';

// const Analytics = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [filters, setFilters] = useState({
//     startDate: '',
//     endDate: '',
//     search: ''
//   });
//   const [stats, setStats] = useState({
//     totalQuestions: 0,
//     uniqueUsers: 0,
//     avgResponseLength: 0,
//     topQuestions: [],
//     dailyStats: [],
//     hourlyStats: [],
//     ipStats: [],
//     questionTypes: []
//   });

//   // Fetch analytics data
//   const fetchAnalytics = async () => {
//     try {
//       setLoading(true);
//       // Replace with your actual API endpoint
//       const response = await fetch('/api/analytics', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(filters)
//       });
      
//       if (!response.ok) throw new Error('Failed to fetch data');
      
//       const result = await response.json();
//       setData(result.data || []);
//       calculateStats(result.data || []);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Calculate statistics
//   const calculateStats = (rawData) => {
//     if (!rawData.length) return;

//     const totalQuestions = rawData.length;
//     const uniqueUsers = new Set(rawData.map(item => item.ipAddress)).size;
//     const avgResponseLength = rawData.reduce((acc, item) => acc + item.response.length, 0) / totalQuestions;

//     // Top questions
//     const questionCounts = {};
//     rawData.forEach(item => {
//       const question = item.title.toLowerCase();
//       questionCounts[question] = (questionCounts[question] || 0) + 1;
//     });
//     const topQuestions = Object.entries(questionCounts)
//       .sort(([,a], [,b]) => b - a)
//       .slice(0, 10)
//       .map(([question, count]) => ({ question, count }));

//     // Daily stats
//     const dailyData = {};
//     rawData.forEach(item => {
//       const date = new Date(item.createdAt).toDateString();
//       dailyData[date] = (dailyData[date] || 0) + 1;
//     });
//     const dailyStats = Object.entries(dailyData)
//       .map(([date, count]) => ({ date, count }))
//       .sort((a, b) => new Date(a.date) - new Date(b.date));

//     // Hourly stats
//     const hourlyData = Array(24).fill(0);
//     rawData.forEach(item => {
//       const hour = new Date(item.createdAt).getHours();
//       hourlyData[hour]++;
//     });
//     const hourlyStats = hourlyData.map((count, hour) => ({ 
//       hour: `${hour}:00`, 
//       count 
//     }));

//     // IP stats
//     const ipCounts = {};
//     rawData.forEach(item => {
//       ipCounts[item.ipAddress] = (ipCounts[item.ipAddress] || 0) + 1;
//     });
//     const ipStats = Object.entries(ipCounts)
//       .sort(([,a], [,b]) => b - a)
//       .slice(0, 10)
//       .map(([ip, count]) => ({ ip, count }));

//     // Question types (simple categorization)
//     const questionTypes = [
//       { type: 'Skills', count: rawData.filter(item => 
//         item.title.toLowerCase().includes('skill') || 
//         item.title.toLowerCase().includes('technology')
//       ).length },
//       { type: 'Projects', count: rawData.filter(item => 
//         item.title.toLowerCase().includes('project') || 
//         item.title.toLowerCase().includes('work')
//       ).length },
//       { type: 'Experience', count: rawData.filter(item => 
//         item.title.toLowerCase().includes('experience') || 
//         item.title.toLowerCase().includes('job')
//       ).length },
//       { type: 'Contact', count: rawData.filter(item => 
//         item.title.toLowerCase().includes('contact') || 
//         item.title.toLowerCase().includes('email')
//       ).length },
//       { type: 'Other', count: rawData.filter(item => 
//         !item.title.toLowerCase().includes('skill') &&
//         !item.title.toLowerCase().includes('project') &&
//         !item.title.toLowerCase().includes('experience') &&
//         !item.title.toLowerCase().includes('contact')
//       ).length }
//     ];

//     setStats({
//       totalQuestions,
//       uniqueUsers,
//       avgResponseLength: Math.round(avgResponseLength),
//       topQuestions,
//       dailyStats,
//       hourlyStats,
//       ipStats,
//       questionTypes
//     });
//   };

//   useEffect(() => {
//     fetchAnalytics();
//   }, []);

//   const handleFilterChange = (key, value) => {
//     setFilters(prev => ({ ...prev, [key]: value }));
//   };

//   const applyFilters = () => {
//     fetchAnalytics();
//   };

//   const exportData = () => {
//     const csvContent = "data:text/csv;charset=utf-8," + 
//       "Question,Response,IP Address,Created At\n" +
//       data.map(row => 
//         `"${row.title}","${row.response}","${row.ipAddress}","${row.createdAt}"`
//       ).join("\n");
    
//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "analytics_data.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="flex items-center gap-3">
//           <Activity className="animate-spin" size={24} />
//           <span>Loading analytics...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Chat Analytics</h1>
//           <p className="text-gray-600">Analyze user interactions and conversation patterns</p>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <div className="flex flex-wrap gap-4 items-end">
//             <div className="flex-1 min-w-64">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Search Questions
//               </label>
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type="text"
//                   placeholder="Search questions..."
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   value={filters.search}
//                   onChange={(e) => handleFilterChange('search', e.target.value)}
//                 />
//               </div>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Start Date
//               </label>
//               <input
//                 type="date"
//                 className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 value={filters.startDate}
//                 onChange={(e) => handleFilterChange('startDate', e.target.value)}
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 End Date
//               </label>
//               <input
//                 type="date"
//                 className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 value={filters.endDate}
//                 onChange={(e) => handleFilterChange('endDate', e.target.value)}
//               />
//             </div>
            
//             <button
//               onClick={applyFilters}
//               className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//             >
//               <Filter size={20} />
//               Apply Filters
//             </button>
            
//             <button
//               onClick={exportData}
//               className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
//             >
//               <Download size={20} />
//               Export CSV
//             </button>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Total Questions</p>
//                 <p className="text-3xl font-bold text-gray-900">{stats.totalQuestions}</p>
//               </div>
//               <MessageSquare className="text-blue-600" size={32} />
//             </div>
//           </div>
          
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Unique Users</p>
//                 <p className="text-3xl font-bold text-gray-900">{stats.uniqueUsers}</p>
//               </div>
//               <Users className="text-green-600" size={32} />
//             </div>
//           </div>
          
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Avg Response Length</p>
//                 <p className="text-3xl font-bold text-gray-900">{stats.avgResponseLength}</p>
//               </div>
//               <BarChart3 className="text-purple-600" size={32} />
//             </div>
//           </div>
          
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Questions/User</p>
//                 <p className="text-3xl font-bold text-gray-900">
//                   {stats.uniqueUsers ? Math.round(stats.totalQuestions / stats.uniqueUsers * 10) / 10 : 0}
//                 </p>
//               </div>
//               <TrendingUp className="text-orange-600" size={32} />
//             </div>
//           </div>
//         </div>

//         {/* Charts Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//           {/* Daily Questions Chart */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Questions</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={stats.dailyStats}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis />
//                 <Tooltip />
//                 <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Hourly Distribution */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Hourly Distribution</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={stats.hourlyStats}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="hour" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="count" fill="#82ca9d" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Question Types */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Question Categories</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={stats.questionTypes}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   label={({ type, percent }) => `${type} ${(percent * 100).toFixed(0)}%`}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   dataKey="count"
//                 >
//                   {stats.questionTypes.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Top IPs */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Users by IP</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={stats.ipStats} layout="horizontal">
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis type="number" />
//                 <YAxis dataKey="ip" type="category" width={100} tick={{ fontSize: 12 }} />
//                 <Tooltip />
//                 <Bar dataKey="count" fill="#ffc658" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Top Questions Table */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Asked Questions</h3>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Question
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Count
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Percentage
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {stats.topQuestions.map((item, index) => (
//                   <tr key={index} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       {item.question}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {item.count}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {((item.count / stats.totalQuestions) * 100).toFixed(1)}%
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Recent Questions */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Questions</h3>
//           <div className="space-y-4">
//             {data.slice(0, 10).map((item, index) => (
//               <div key={item._id} className="border-l-4 border-blue-500 pl-4 py-2">
//                 <div className="flex justify-between items-start mb-2">
//                   <h4 className="font-medium text-gray-900">{item.title}</h4>
//                   <span className="text-xs text-gray-500">
//                     {new Date(item.createdAt).toLocaleString()}
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-600 mb-2 line-clamp-3">{item.response}</p>
//                 <div className="flex items-center gap-4 text-xs text-gray-500">
//                   <span className="flex items-center gap-1">
//                     <Globe size={12} />
//                     {item.ipAddress}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Clock size={12} />
//                     {new Date(item.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;




// import React, { useState, useEffect } from 'react';
// import { 
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
//   LineChart, Line, PieChart, Pie, Cell, AreaChart, Area 
// } from 'recharts';
// import { 
//   MessageSquare, Users, Clock, TrendingUp, Search, Filter, 
//   Download, Calendar, Globe, Activity, Eye, BarChart3 
// } from 'lucide-react';

// // Dummy data for testing
// const DUMMY_DATA = [
//   {
//     _id: "6880b0bb498ef15e16450d6c",
//     title: "Tell me about your skills",
//     response: "I have experience in React, Node.js, Python, and various other technologies. I'm passionate about full-stack development and always learning new things.",
//     ipAddress: "103.191.40.90",
//     createdAt: "2025-01-20T09:51:55.046Z"
//   },
//   {
//     _id: "6880b0bb498ef15e16450d6d",
//     title: "What projects have you built?",
//     response: "I've built several projects including e-commerce websites, AI chatbots, portfolio sites, and mobile applications using React Native.",
//     ipAddress: "192.168.1.100",
//     createdAt: "2025-01-20T14:30:22.046Z"
//   },
//   {
//     _id: "6880b0bb498ef15e16450d6e",
//     title: "How can I contact you?",
//     response: "You can reach me through email at contact@example.com or connect with me on LinkedIn.",
//     ipAddress: "103.191.40.90",
//     createdAt: "2025-01-21T08:15:33.046Z"
//   },
//   {
//     _id: "6880b0bb498ef15e16450d6f",
//     title: "What's your experience with React?",
//     response: "I have over 3 years of experience with React, building complex applications with hooks, context, and modern patterns.",
//     ipAddress: "10.0.0.5",
//     createdAt: "2025-01-21T11:45:12.046Z"
//   },
//   {
//     _id: "6880b0bb498ef15e16450d70",
//     title: "Do you work with databases?",
//     response: "Yes, I work with both SQL databases like PostgreSQL and NoSQL databases like MongoDB.",
//     ipAddress: "192.168.1.100",
//     createdAt: "2025-01-21T16:20:45.046Z"
//   },
//   {
//     _id: "6880b0bb498ef15e16450d71",
//     title: "Tell me about your skills",
//     response: "I specialize in modern web technologies including React, Vue.js, Node.js, and cloud platforms like AWS.",
//     ipAddress: "203.45.67.89",
//     createdAt: "2025-01-22T07:30:18.046Z"
//   },
//   {
//     _id: "6880b0bb498ef15e16450d72",
//     title: "What projects have you built?",
//     response: "Some of my notable projects include a task management app, real-time chat application, and an AI-powered recommendation system.",
//     ipAddress: "103.191.40.90",
//     createdAt: "2025-01-22T13:15:27.046Z"
//   },
//   {
//     _id: "6880b0bb498ef15e16450d73",
//     title: "Are you available for freelance work?",
//     response: "Yes, I'm available for freelance projects. Feel free to reach out to discuss your requirements.",
//     ipAddress: "172.16.0.1",
//     createdAt: "2025-01-22T19:40:55.046Z"
//   },
//   {
//     _id: "6880b0bb498ef15e16450d74",
//     title: "What's your experience level?",
//     response: "I have 4+ years of professional experience in software development, working on both frontend and backend technologies.",
//     ipAddress: "10.0.0.5",
//     createdAt: "2025-01-23T06:25:33.046Z"
//   },
//   {
//     _id: "6880b0bb498ef15e16450d75",
//     title: "Do you know mobile development?",
//     response: "Yes, I have experience with React Native for cross-platform mobile development and have built several mobile apps.",
//     ipAddress: "192.168.1.100",
//     createdAt: "2025-01-23T12:50:41.046Z"
//   },
//   {
//     _id: "6880b0bb498ef15e16450d76",
//     title: "What's your preferred tech stack?",
//     response: "My preferred stack is React/Next.js for frontend, Node.js/Express for backend, and PostgreSQL/MongoDB for databases.",
//     ipAddress: "203.45.67.89",
//     createdAt: "2025-01-23T15:35:12.046Z"
//   },
//   {
//     _id: "6880b0bb498ef15e16450d77",
//     title: "Can you help with AI projects?",
//     response: "Absolutely! I have experience with machine learning, natural language processing, and building AI-powered applications.",
//     ipAddress: "103.191.40.90",
//     createdAt: "2025-01-24T09:20:28.046Z"
//   },
//   {
//     _id: "6880b0bb498ef15e16450d78",
//     title: "Tell me about your skills",
//     response: "I'm proficient in JavaScript, TypeScript, Python, React, Node.js, Docker, and various cloud services.",
//     ipAddress: "172.16.0.1",
//     createdAt: "2025-01-24T14:10:17.046Z"
//   },
//   {
//     _id: "6880b0bb498ef15e16450d79",
//     title: "How do you approach problem solving?",
//     response: "I believe in breaking down complex problems into smaller, manageable parts and using systematic approaches to find solutions.",
//     ipAddress: "10.0.0.5",
//     createdAt: "2025-01-24T18:45:39.046Z"
//   },
//   {
//     _id: "6880b0bb498ef15e16450d7a",
//     title: "What's your work methodology?",
//     response: "I follow agile methodologies, emphasize clean code practices, and believe in continuous learning and improvement.",
//     ipAddress: "192.168.1.100",
//     createdAt: "2025-01-24T21:15:52.046Z"
//   }
// ];

// const Analytics = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [filters, setFilters] = useState({
//     startDate: '',
//     endDate: '',
//     search: ''
//   });
//   const [stats, setStats] = useState({
//     totalQuestions: 0,
//     uniqueUsers: 0,
//     avgResponseLength: 0,
//     topQuestions: [],
//     dailyStats: [],
//     hourlyStats: [],
//     ipStats: [],
//     questionTypes: []
//   });

//   // Fetch analytics data (using dummy data for now)
//   const fetchAnalytics = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('http://localhost:8080/api/v1/ai/analytics/detailed', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(filters)
//       });
      
//       if (!response.ok) throw new Error('Failed to fetch data');
      
//       const result = await response.json();
      
//       if (result.success) {
//         setData(result.analytics.recentQuestions || []);
//         setStats({
//           totalQuestions: result.analytics.totalQuestions,
//           uniqueUsers: result.analytics.uniqueUsers,
//           avgResponseLength: result.analytics.avgResponseLength,
//           topQuestions: result.analytics.topQuestions,
//           dailyStats: result.analytics.dailyStats,
//           hourlyStats: result.analytics.hourlyStats,
//           ipStats: result.analytics.ipStats,
//           questionTypes: result.analytics.questionTypes || []
//         });
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Calculate statistics
//   const calculateStats = (rawData) => {
//     if (!rawData.length) {
//       setStats({
//         totalQuestions: 0,
//         uniqueUsers: 0,
//         avgResponseLength: 0,
//         topQuestions: [],
//         dailyStats: [],
//         hourlyStats: [],
//         ipStats: [],
//         questionTypes: []
//       });
//       return;
//     }

//     const totalQuestions = rawData.length;
//     const uniqueUsers = new Set(rawData.map(item => item.ipAddress)).size;
//     const avgResponseLength = rawData.reduce((acc, item) => acc + item.response.length, 0) / totalQuestions;

//     // Top questions
//     const questionCounts = {};
//     rawData.forEach(item => {
//       const question = item.title.toLowerCase();
//       questionCounts[question] = (questionCounts[question] || 0) + 1;
//     });
//     const topQuestions = Object.entries(questionCounts)
//       .sort(([,a], [,b]) => b - a)
//       .slice(0, 10)
//       .map(([question, count]) => ({ question, count }));

//     // Daily stats
//     const dailyData = {};
//     rawData.forEach(item => {
//       const date = new Date(item.createdAt).toDateString();
//       dailyData[date] = (dailyData[date] || 0) + 1;
//     });
//     const dailyStats = Object.entries(dailyData)
//       .map(([date, count]) => ({ 
//         date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), 
//         count 
//       }))
//       .sort((a, b) => new Date(a.date) - new Date(b.date));

//     // Hourly stats
//     const hourlyData = Array(24).fill(0);
//     rawData.forEach(item => {
//       const hour = new Date(item.createdAt).getHours();
//       hourlyData[hour]++;
//     });
//     const hourlyStats = hourlyData.map((count, hour) => ({ 
//       hour: `${hour.toString().padStart(2, '0')}:00`, 
//       count 
//     }));

//     // IP stats
//     const ipCounts = {};
//     rawData.forEach(item => {
//       ipCounts[item.ipAddress] = (ipCounts[item.ipAddress] || 0) + 1;
//     });
//     const ipStats = Object.entries(ipCounts)
//       .sort(([,a], [,b]) => b - a)
//       .slice(0, 10)
//       .map(([ip, count]) => ({ ip, count }));

//     // Question types (simple categorization)
//     const questionTypes = [
//       { 
//         type: 'Skills', 
//         count: rawData.filter(item => 
//           item.title.toLowerCase().includes('skill') || 
//           item.title.toLowerCase().includes('technology') ||
//           item.title.toLowerCase().includes('experience')
//         ).length 
//       },
//       { 
//         type: 'Projects', 
//         count: rawData.filter(item => 
//           item.title.toLowerCase().includes('project') || 
//           item.title.toLowerCase().includes('work') ||
//           item.title.toLowerCase().includes('built')
//         ).length 
//       },
//       { 
//         type: 'Contact', 
//         count: rawData.filter(item => 
//           item.title.toLowerCase().includes('contact') || 
//           item.title.toLowerCase().includes('email') ||
//           item.title.toLowerCase().includes('available')
//         ).length 
//       },
//       { 
//         type: 'Technical', 
//         count: rawData.filter(item => 
//           item.title.toLowerCase().includes('database') ||
//           item.title.toLowerCase().includes('react') ||
//           item.title.toLowerCase().includes('mobile') ||
//           item.title.toLowerCase().includes('ai')
//         ).length 
//       },
//       { 
//         type: 'General', 
//         count: rawData.filter(item => 
//           item.title.toLowerCase().includes('approach') ||
//           item.title.toLowerCase().includes('methodology') ||
//           (!item.title.toLowerCase().includes('skill') &&
//            !item.title.toLowerCase().includes('project') &&
//            !item.title.toLowerCase().includes('contact') &&
//            !item.title.toLowerCase().includes('database') &&
//            !item.title.toLowerCase().includes('react') &&
//            !item.title.toLowerCase().includes('mobile') &&
//            !item.title.toLowerCase().includes('ai'))
//         ).length 
//       }
//     ].filter(type => type.count > 0); // Only show categories with data

//     setStats({
//       totalQuestions,
//       uniqueUsers,
//       avgResponseLength: Math.round(avgResponseLength),
//       topQuestions,
//       dailyStats,
//       hourlyStats,
//       ipStats,
//       questionTypes
//     });
//   };

//   useEffect(() => {
//     fetchAnalytics();
//   }, []);

//   const handleFilterChange = (key, value) => {
//     setFilters(prev => ({ ...prev, [key]: value }));
//   };

//   const applyFilters = () => {
//     fetchAnalytics();
//   };

//   const resetFilters = () => {
//     setFilters({ startDate: '', endDate: '', search: '' });
//     setTimeout(() => fetchAnalytics(), 100);
//   };

//   const exportData = () => {
//     const csvContent = "data:text/csv;charset=utf-8," + 
//       "Question,Response,IP Address,Created At\n" +
//       data.map(row => 
//         `"${row.title}","${row.response}","${row.ipAddress}","${row.createdAt}"`
//       ).join("\n");
    
//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "analytics_data.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="flex items-center gap-3">
//           <Activity className="animate-spin" size={24} />
//           <span>Loading analytics...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="text-red-500 mb-4">⚠️ Error loading data</div>
//           <p className="text-gray-600 mb-4">{error}</p>
//           <button 
//             onClick={fetchAnalytics}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Chat Analytics</h1>
//           <p className="text-gray-600">Analyze user interactions and conversation patterns</p>
//           <div className="mt-2 text-sm text-blue-600 bg-blue-50 p-2 rounded">
//             📊 Currently showing dummy data for demonstration. Connect to your API to see real analytics.
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <div className="flex flex-wrap gap-4 items-end">
//             <div className="flex-1 min-w-64">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Search Questions
//               </label>
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type="text"
//                   placeholder="Search questions..."
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   value={filters.search}
//                   onChange={(e) => handleFilterChange('search', e.target.value)}
//                 />
//               </div>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Start Date
//               </label>
//               <input
//                 type="date"
//                 className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 value={filters.startDate}
//                 onChange={(e) => handleFilterChange('startDate', e.target.value)}
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 End Date
//               </label>
//               <input
//                 type="date"
//                 className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 value={filters.endDate}
//                 onChange={(e) => handleFilterChange('endDate', e.target.value)}
//               />
//             </div>
            
//             <button
//               onClick={applyFilters}
//               className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//             >
//               <Filter size={20} />
//               Apply Filters
//             </button>
            
//             <button
//               onClick={resetFilters}
//               className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
//             >
//               Reset
//             </button>
            
//             <button
//               onClick={exportData}
//               className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
//             >
//               <Download size={20} />
//               Export CSV
//             </button>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Total Questions</p>
//                 <p className="text-3xl font-bold text-gray-900">{stats.totalQuestions}</p>
//               </div>
//               <MessageSquare className="text-blue-600" size={32} />
//             </div>
//           </div>
          
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Unique Users</p>
//                 <p className="text-3xl font-bold text-gray-900">{stats.uniqueUsers}</p>
//               </div>
//               <Users className="text-green-600" size={32} />
//             </div>
//           </div>
          
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Avg Response Length</p>
//                 <p className="text-3xl font-bold text-gray-900">{stats.avgResponseLength}</p>
//               </div>
//               <BarChart3 className="text-purple-600" size={32} />
//             </div>
//           </div>
          
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Questions/User</p>
//                 <p className="text-3xl font-bold text-gray-900">
//                   {stats.uniqueUsers ? Math.round(stats.totalQuestions / stats.uniqueUsers * 10) / 10 : 0}
//                 </p>
//               </div>
//               <TrendingUp className="text-orange-600" size={32} />
//             </div>
//           </div>
//         </div>

//         {/* Charts Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//           {/* Daily Questions Chart */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Questions</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={stats.dailyStats}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" tick={{ fontSize: 12 }} />
//                 <YAxis />
//                 <Tooltip />
//                 <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Hourly Distribution */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Hourly Distribution</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={stats.hourlyStats}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="count" fill="#82ca9d" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Question Types */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Question Categories</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={stats.questionTypes}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   label={({ type, percent }) => `${type} ${(percent * 100).toFixed(0)}%`}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   dataKey="count"
//                 >
//                   {stats.questionTypes.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Top IPs */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Users by IP</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={stats.ipStats} layout="horizontal">
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis type="number" />
//                 <YAxis dataKey="ip" type="category" width={100} tick={{ fontSize: 12 }} />
//                 <Tooltip />
//                 <Bar dataKey="count" fill="#ffc658" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Top Questions Table */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Asked Questions</h3>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Question
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Count
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Percentage
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {stats.topQuestions.map((item, index) => (
//                   <tr key={index} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 text-sm text-gray-900 capitalize">
//                       {item.question}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {item.count}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {((item.count / stats.totalQuestions) * 100).toFixed(1)}%
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Recent Questions */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Questions</h3>
//           <div className="space-y-4">
//             {data.slice(0, 10).map((item, index) => (
//               <div key={item._id} className="border-l-4 border-blue-500 pl-4 py-2">
//                 <div className="flex justify-between items-start mb-2">
//                   <h4 className="font-medium text-gray-900">{item.title}</h4>
//                   <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
//                     {new Date(item.createdAt).toLocaleString()}
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-600 mb-2 line-clamp-3">{item.response}</p>
//                 <div className="flex items-center gap-4 text-xs text-gray-500">
//                   <span className="flex items-center gap-1">
//                     <Globe size={12} />
//                     {item.ipAddress}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Clock size={12} />
//                     {new Date(item.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;




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
      const response = await fetch('http://localhost:8080/api/v1/ai/analytics/detailed', {
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
