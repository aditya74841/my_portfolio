// import React, { useState, useEffect, useCallback } from "react";
// import {
//   Heart,
//   MessageCircle,
//   Send,
//   ThumbsDown,
//   Clock,
//   TrendingUp,
//   Users,
//   Sparkles,
//   ChevronRight,
//   Star,
// } from "lucide-react";
// import { fetchUpdates } from "./api";
// import toast from "react-hot-toast";
// import { fetchCategories } from "../update/api";

// // Random user names generator
// const userNames = [
//   "Sarah Davis",
//   "Mike Wilson",
//   "Alex Johnson",
//   "Jennifer Taylor",
//   "David Brown",
//   "Emily Chen",
//   "Ryan Martinez",
//   "Amanda Garcia",
//   "Chris Lee",
//   "Jessica Wong",
//   "Kevin Park",
//   "Lisa Thompson",
//   "Daniel Kim",
//   "Rachel Green",
//   "Mark Anderson",
// ];

// const getRandomUserName = () => {
//   return userNames[Math.floor(Math.random() * userNames.length)];
// };


// const DailyUpdate = () => {
//   const [updates, setUpdates] = useState([]);
//   const [commentInputs, setCommentInputs] = useState({});
//   const [expandedComments, setExpandedComments] = useState({});
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [nextUserNames, setNextUserNames] = useState({});
//   const [likedUpdates, setLikedUpdates] = useState(new Set());
//   const [dislikedUpdates, setDislikedUpdates] = useState(new Set());
//   const [loading, setLoading] = useState("");
//   const [categories, setCategories] = useState([]);
//   const getUpdates = useCallback(async () => {
//     try {
//       setLoading(true);
//       const data = await fetchUpdates();
//       setUpdates(data.updates || []);
//     } catch (err) {
//       toast.error("Failed to fetch updates");
//       console.error("Error fetching updates:", err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const getCategories = useCallback(async () => {
//     try {
//       const data = await fetchCategories();
//       setCategories(data);
//     } catch (err) {
//       toast.error("Failed to fetch categories");
//       console.error("Error fetching categories:", err.message);
//     }
//   }, []);

//   useEffect(() => {
//     getUpdates();
//     getCategories();
//   }, [getUpdates, getCategories]);

 

//   // Filter updates based on selected category
//   const filteredUpdates =
//     selectedCategory === "all"
//       ? updates
//       : updates.filter((update) => update.category === selectedCategory);

//   // Get category info
//   const getCategoryInfo = (categoryId) => {
//     return categories.find((cat) => cat.id === categoryId) || categories[0];
//   };

//   // Handle like with animation
//   const handleLike = (id) => {
//     if (likedUpdates.has(id)) return;

//     setLikedUpdates((prev) => new Set([...prev, id]));
//     setDislikedUpdates((prev) => {
//       const newSet = new Set(prev);
//       newSet.delete(id);
//       return newSet;
//     });

//     setUpdates((prev) =>
//       prev.map((u) =>
//         u._id === id
//           ? {
//               ...u,
//               like: u.like + 1,
//               dislike: dislikedUpdates.has(id)
//                 ? Math.max(0, u.dislike - 1)
//                 : u.dislike,
//             }
//           : u
//       )
//     );
//   };

//   // Handle dislike
//   const handleDislike = (id) => {
//     if (dislikedUpdates.has(id)) return;

//     setDislikedUpdates((prev) => new Set([...prev, id]));
//     setLikedUpdates((prev) => {
//       const newSet = new Set(prev);
//       newSet.delete(id);
//       return newSet;
//     });

//     setUpdates((prev) =>
//       prev.map((u) =>
//         u._id === id
//           ? {
//               ...u,
//               dislike: u.dislike + 1,
//               like: likedUpdates.has(id) ? Math.max(0, u.like - 1) : u.like,
//             }
//           : u
//       )
//     );
//   };

//   // Handle comment input change
//   const handleCommentChange = (id, value) => {
//     setCommentInputs((prev) => ({ ...prev, [id]: value }));
//   };

//   // Handle comment submit
//   const handleCommentSubmit = (id) => {
//     const text = commentInputs[id]?.trim();
//     if (!text) return;

//     const author = nextUserNames[id] || getRandomUserName();
//     const newComment = {
//       text,
//       createdAt: new Date().toISOString(),
//       author,
//     };
//     setUpdates((prev) =>
//       prev.map((u) =>
//         u._id === id
//           ? {
//               ...u,
//               comment: [...u.comment, newComment],
//             }
//           : u
//       )
//     );
//     setCommentInputs((prev) => ({ ...prev, [id]: "" }));
//     setNextUserNames((prev) => ({ ...prev, [id]: getRandomUserName() }));
//   };

//   // Toggle comment expansion
//   const toggleComments = (id) => {
//     setExpandedComments((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   // Format time ago
//   const formatTimeAgo = (dateString) => {
//     const now = new Date();
//     const date = new Date(dateString);
//     const diffInMinutes = Math.floor((now - date) / (1000 * 60));

//     if (diffInMinutes < 1) return "Just now";
//     if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
//     if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
//     return `${Math.floor(diffInMinutes / 1440)}d ago`;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto p-6">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center gap-3 mb-6">
//             <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
//               <Sparkles className="w-6 h-6 text-white" />
//             </div>
//             <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
//               Daily Updates
//             </h1>
//           </div>
//           <p className="text-slate-300 text-lg max-w-2xl mx-auto">
//             Stay connected with your team's progress and celebrate wins together
//           </p>

//           {/* Stats Bar */}
//           <div className="flex items-center justify-center gap-8 mt-8">
//             <div className="flex items-center gap-2 text-slate-400">
//               <TrendingUp className="w-5 h-5 text-emerald-400" />
//               <span className="text-sm">
//                 {updates.filter((u) => u.trending).length} Trending
//               </span>
//             </div>
//             <div className="flex items-center gap-2 text-slate-400">
//               <Users className="w-5 h-5 text-blue-400" />
//               <span className="text-sm">
//                 {updates.reduce((acc, u) => acc + u.comment.length, 0)} Comments
//               </span>
//             </div>
//             <div className="flex items-center gap-2 text-slate-400">
//               <Heart className="w-5 h-5 text-pink-400" />
//               <span className="text-sm">
//                 {updates.reduce((acc, u) => acc + u.like, 0)} Likes
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Category Filter */}
//         <div className="mb-12">
//           <div className="flex flex-wrap gap-4 justify-center">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`group relative px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
//                   selectedCategory === category.id
//                     ? `bg-gradient-to-r ${category.color} text-white shadow-2xl shadow-purple-500/25`
//                     : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700 hover:border-slate-600"
//                 }`}
//               >
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg">{category.icon}</span>
//                   <span>{category.name}</span>
//                   {category.id !== "all" && (
//                     <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
//                       {updates.filter((u) => u.category === category.id).length}
//                     </span>
//                   )}
//                 </div>
//                 {selectedCategory === category.id && (
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 animate-pulse"></div>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Updates Feed */}
//         <div className="space-y-8">
//           {filteredUpdates.map((update) => {
//             const categoryInfo = getCategoryInfo(update.category);
//             const isLiked = likedUpdates.has(update._id);
//             const isDisliked = dislikedUpdates.has(update._id);

//             return (
//               <div
//                 key={update._id}
//                 className="group relative bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
//               >
//                 {/* Trending indicator */}
//                 {update.trending && (
//                   <div className="absolute top-4 right-4 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
//                     <TrendingUp className="w-3 h-3" />
//                     Trending
//                   </div>
//                 )}

//                 {/* Priority indicator */}
//                 {update.priority === "high" && (
//                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
//                 )}

//                 {/* Update Content */}
//                 <div className="p-8">
//                   <div className="flex items-start justify-between mb-6">
//                     <div className="flex-1 pr-4">
//                       <div className="flex items-center gap-3 mb-3">
//                         <div
//                           className={`bg-gradient-to-r ${categoryInfo.color} text-white text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2`}
//                         >
//                           <span className="text-sm">{categoryInfo.icon}</span>
//                           {categoryInfo.name}
//                         </div>
//                         <div className="flex items-center gap-2 text-sm text-slate-400">
//                           <Clock className="w-4 h-4" />
//                           {formatTimeAgo(update.createdAt)}
//                         </div>
//                         {update.priority === "high" && (
//                           <div className="flex items-center gap-1 text-xs text-red-400">
//                             <Star className="w-3 h-3" />
//                             High Priority
//                           </div>
//                         )}
//                       </div>
//                       <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
//                         {update.name}
//                       </h2>
//                     </div>
//                   </div>

//                   <p className="text-slate-300 leading-relaxed mb-8 text-lg">
//                     {update.description}
//                   </p>

//                   {/* Enhanced Engagement Bar */}
//                   <div className="flex items-center gap-4 flex-wrap">
//                     <button
//                       onClick={() => handleLike(update._id)}
//                       disabled={isLiked}
//                       className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
//                         isLiked
//                           ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg shadow-pink-500/25"
//                           : "bg-slate-700/50 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-red-500/20 text-slate-300 hover:text-white border border-slate-600"
//                       }`}
//                     >
//                       <Heart
//                         className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
//                       />
//                       <span className="font-medium">{update.like}</span>
//                       <span className="text-sm">Likes</span>
//                     </button>

//                     <button
//                       onClick={() => handleDislike(update._id)}
//                       disabled={isDisliked}
//                       className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
//                         isDisliked
//                           ? "bg-slate-600 text-white"
//                           : "bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white border border-slate-600"
//                       }`}
//                     >
//                       <ThumbsDown className="w-5 h-5" />
//                       <span className="font-medium">{update.dislike}</span>
//                     </button>

//                     <button
//                       onClick={() => toggleComments(update._id)}
//                       className="flex items-center gap-3 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-full transition-all duration-300 transform hover:scale-105 border border-blue-500/30"
//                     >
//                       <MessageCircle className="w-5 h-5" />
//                       <span className="font-medium">
//                         {update.comment.length}
//                       </span>
//                       <span className="text-sm">
//                         {update.comment.length === 1 ? "Comment" : "Comments"}
//                       </span>
//                       <ChevronRight
//                         className={`w-4 h-4 transition-transform ${
//                           expandedComments[update._id] ? "rotate-90" : ""
//                         }`}
//                       />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Comments Section */}
//                 <div className="border-t border-slate-700/50 bg-slate-800/30">
//                   {/* Comment Input */}
//                   <div className="p-6 pb-4">
//                     <div className="flex gap-4">
//                       <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium shadow-lg">
//                         {(nextUserNames[update._id] || "A").charAt(0)}
//                       </div>
//                       <div className="flex-1 flex gap-3">
//                         <input
//                           type="text"
//                           placeholder="Share your thoughts..."
//                           value={commentInputs[update._id] || ""}
//                           onChange={(e) =>
//                             handleCommentChange(update._id, e.target.value)
//                           }
//                           onKeyDown={(e) => {
//                             if (e.key === "Enter")
//                               handleCommentSubmit(update._id);
//                           }}
//                           className="flex-1 px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
//                         />
//                         <button
//                           onClick={() => handleCommentSubmit(update._id)}
//                           className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 transform hover:scale-105 shadow-lg"
//                         >
//                           <Send className="w-4 h-4" />
//                           <span className="font-medium">Post</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Comments List */}
//                   {update.comment.length > 0 && (
//                     <div className="px-6 pb-6">
//                       <div className="space-y-4">
//                         {/* Show first 2 comments or all if expanded */}
//                         {(expandedComments[update._id]
//                           ? update.comment
//                           : update.comment.slice(0, 2)
//                         ).map((comment, idx) => (
//                           <div key={idx} className="flex gap-4 group/comment">
//                             <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium shadow-lg">
//                               {comment.author?.charAt(0) || "A"}
//                             </div>
//                             <div className="flex-1">
//                               <div className="bg-slate-700/50 rounded-2xl px-6 py-4 backdrop-blur-sm border border-slate-600/50 group-hover/comment:border-slate-500/50 transition-all duration-300">
//                                 <div className="flex items-center gap-3 mb-2">
//                                   <span className="font-medium text-white">
//                                     {comment.author || "Anonymous"}
//                                   </span>
//                                   <span className="text-xs text-slate-400">
//                                     {formatTimeAgo(comment.createdAt)}
//                                   </span>
//                                 </div>
//                                 <p className="text-slate-300 leading-relaxed">
//                                   {comment.text}
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         ))}

//                         {/* Show more/less button */}
//                         {update.comment.length > 2 && (
//                           <button
//                             onClick={() => toggleComments(update._id)}
//                             className="text-blue-400 hover:text-blue-300 font-medium ml-14 transition-colors duration-300 flex items-center gap-2"
//                           >
//                             {expandedComments[update._id]
//                               ? "Show less"
//                               : `Show ${
//                                   update.comment.length - 2
//                                 } more comments`}
//                             <ChevronRight
//                               className={`w-4 h-4 transition-transform ${
//                                 expandedComments[update._id] ? "rotate-90" : ""
//                               }`}
//                             />
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   )}

//                   {/* Empty state */}
//                   {update.comment.length === 0 && (
//                     <div className="px-6 pb-6 text-center">
//                       <p className="text-slate-400">
//                         Be the first to share your thoughts! 💭
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Empty state for filtered results */}
//         {filteredUpdates.length === 0 && (
//           <div className="text-center py-16">
//             <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
//               <MessageCircle className="w-10 h-10 text-slate-400" />
//             </div>
//             <h3 className="text-xl font-medium text-slate-300 mb-2">
//               No updates found
//             </h3>
//             <p className="text-slate-500">
//               Try selecting a different category or check back later.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DailyUpdate;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heart, MessageCircle, Send, ThumbsDown, Clock } from "lucide-react";
import { getRandomUserName } from "../../utils/helper";

// const API_BASE = "http://localhost:8080/api/v1/update";
// const CATEGORY_URL = "http://localhost:8080/api/v1/category";

const API_BASE = `https://portfolio-server-8zb7.onrender.com/api/v1/update`;
const CATEGORY_URL = "https://portfolio-server-8zb7.onrender.com/api/v1/category";

const DailyUpdate = () => {
  const [updates, setUpdates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [commentInputs, setCommentInputs] = useState({});
  const [expandedComments, setExpandedComments] = useState({});
  const [nextUserNames, setNextUserNames] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch updates and categories on mount
  useEffect(() => {
    fetchUpdates();
    fetchCategories();
  }, []);

  const fetchUpdates = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_BASE);
      const updatesArr = res.data.data.updates || [];
      setUpdates(updatesArr);
      // Initialize random user names for each update
      const initialUserNames = {};
      updatesArr.forEach((u) => {
        initialUserNames[u._id] = getRandomUserName();
      });
      setNextUserNames(initialUserNames);
    } catch (err) {
      setUpdates([]);
    }
    setLoading(false);
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(CATEGORY_URL);
      setCategories(res.data.data.docs || res.data.data || []);
    } catch (err) {
      setCategories([]);
    }
  };

  // Filtering by createdBy.name
  const filteredUpdates =
    selectedCategory === "all"
      ? updates
      : updates.filter(
          (update) => update.createdBy?.name === selectedCategory
        );

  // Like update
  const handleLike = async (id) => {
    try {
      await axios.get(`${API_BASE}/${id}/like`);
      setUpdates((prev) =>
        prev.map((u) =>
          u._id === id ? { ...u, like: (u.like || 0) + 1 } : u
        )
      );
    } catch (err) {}
  };

  // Dislike update
  const handleDislike = async (id) => {
    try {
      await axios.get(`${API_BASE}/${id}/dislike`);
      setUpdates((prev) =>
        prev.map((u) =>
          u._id === id ? { ...u, dislike: (u.dislike || 0) + 1 } : u
        )
      );
    } catch (err) {}
  };

  // Handle comment input change
  const handleCommentChange = (id, value) => {
    setCommentInputs((prev) => ({ ...prev, [id]: value }));
  };

  // Add comment
  const handleCommentSubmit = async (id) => {
    const text = commentInputs[id]?.trim();
    if (!text) return;
    const author = nextUserNames[id] || getRandomUserName();
    try {
      await axios.post(`${API_BASE}/${id}/comment`, { text, author });
      const newComment = {
        text,
        createdAt: new Date().toISOString(),
        author,
      };
      setUpdates((prev) =>
        prev.map((u) =>
          u._id === id
            ? { ...u, comment: [...(u.comment || []), newComment] }
            : u
        )
      );
      setCommentInputs((prev) => ({ ...prev, [id]: "" }));
      setNextUserNames((prev) => ({ ...prev, [id]: getRandomUserName() }));
    } catch (err) {}
  };

  // Toggle comment expansion
  const toggleComments = (id) => {
    setExpandedComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Format time ago
  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Daily Updates
          </h1>
          <p className="text-gray-600 text-lg">
            Stay connected with my progress
          </p>
        </div>
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              key="all"
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === "all"
                  ? "bg-gray-500 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              All Updates
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.name
                    ? "bg-blue-500 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">
                  {
                    updates.filter(
                      (u) => u.createdBy?.name === category.name
                    ).length
                  }
                </span>
              </button>
            ))}
          </div>
        </div>
        {/* Updates Feed */}
        <div className="space-y-8">
          {loading && (
            <div className="text-center text-gray-500">Loading...</div>
          )}
          {!loading && filteredUpdates.length === 0 && (
            <div className="text-center text-gray-500">
              No updates found for this category.
            </div>
          )}
          {!loading &&
            filteredUpdates.map((update) => (
              <div
                key={update._id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 overflow-hidden"
              >
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                          {update.createdBy?.name || "Unknown"}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-3 h-3" />
                          {formatTimeAgo(update.createdAt)}
                        </div>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {update.name}
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {update.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLike(update._id)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full transition-all duration-200 transform hover:scale-105"
                    >
                      <Heart className="w-4 h-4" />
                      <span className="font-medium">{update.like || 0}</span>
                    </button>
                    <button
                      onClick={() => handleDislike(update._id)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-all duration-200"
                    >
                      <ThumbsDown className="w-4 h-4" />
                      <span className="font-medium">{update.dislike || 0}</span>
                    </button>
                    <button
                      onClick={() => toggleComments(update._id)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="font-medium">
                        {(update.comment || []).length}
                      </span>
                      <span className="text-sm">
                        {(update.comment || []).length === 1
                          ? "comment"
                          : "comments"}
                      </span>
                    </button>
                  </div>
                </div>
                {/* Comments Section */}
                <div className="border-t border-gray-100 bg-gray-50/50">
                  <div className="p-6 pb-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {(nextUserNames[update._id] || "A").charAt(0)}
                      </div>
                      <div className="flex-1 flex gap-2">
                        <input
                          type="text"
                          placeholder="Share your thoughts..."
                          value={commentInputs[update._id] || ""}
                          onChange={(e) =>
                            handleCommentChange(update._id, e.target.value)
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter")
                              handleCommentSubmit(update._id);
                          }}
                          className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent bg-white text-black"
                        />
                        <button
                          onClick={() => handleCommentSubmit(update._id)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {(update.comment || []).length > 0 && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4">
                        {(expandedComments[update._id]
                          ? update.comment
                          : update.comment.slice(0, 2)
                        ).map((comment, idx) => (
                          <div key={idx} className="flex gap-3 group">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                              {comment.author?.charAt(0) || "A"}
                            </div>
                            <div className="flex-1">
                              <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium text-gray-800 text-sm">
                                    {comment.author || "Anonymous"}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {formatTimeAgo(comment.createdAt)}
                                  </span>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  {comment.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                        {update.comment.length > 2 && (
                          <button
                            onClick={() => toggleComments(update._id)}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium ml-11 transition-colors"
                          >
                            {expandedComments[update._id]
                              ? "Show less"
                              : `Show ${update.comment.length - 2} more comments`}
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                  {(update.comment || []).length === 0 && (
                    <div className="px-6 pb-6 text-center">
                      <p className="text-gray-500 text-sm">
                        No comments yet. Be the first to share your thoughts!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DailyUpdate;