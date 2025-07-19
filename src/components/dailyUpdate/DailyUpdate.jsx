
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Heart, MessageCircle, Send, ThumbsDown, Clock } from "lucide-react";
// import { getRandomUserName } from "../../utils/helper";

// // const API_BASE = "http://localhost:8080/api/v1/update";
// // const CATEGORY_URL = "http://localhost:8080/api/v1/category";

// const API_BASE = `https://portfolio-server-8zb7.onrender.com/api/v1/update`;
// const CATEGORY_URL = "https://portfolio-server-8zb7.onrender.com/api/v1/category";

// const DailyUpdate = () => {
//   const [updates, setUpdates] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [commentInputs, setCommentInputs] = useState({});
//   const [expandedComments, setExpandedComments] = useState({});
//   const [nextUserNames, setNextUserNames] = useState({});
//   const [loading, setLoading] = useState(false);

//   // Fetch updates and categories on mount
//   useEffect(() => {
//     fetchUpdates();
//     fetchCategories();
//   }, []);

//   const fetchUpdates = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(API_BASE);
//       const updatesArr = res.data.data.updates || [];
//       setUpdates(updatesArr);
//       // Initialize random user names for each update
//       const initialUserNames = {};
//       updatesArr.forEach((u) => {
//         initialUserNames[u._id] = getRandomUserName();
//       });
//       setNextUserNames(initialUserNames);
//     } catch (err) {
//       setUpdates([]);
//     }
//     setLoading(false);
//   };

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get(CATEGORY_URL);
//       setCategories(res.data.data.docs || res.data.data || []);
//     } catch (err) {
//       setCategories([]);
//     }
//   };

//   // Filtering by createdBy.name
//   const filteredUpdates =
//     selectedCategory === "all"
//       ? updates
//       : updates.filter(
//           (update) => update.createdBy?.name === selectedCategory
//         );

//   // Like update
//   const handleLike = async (id) => {
//     try {
//       await axios.get(`${API_BASE}/${id}/like`);
//       setUpdates((prev) =>
//         prev.map((u) =>
//           u._id === id ? { ...u, like: (u.like || 0) + 1 } : u
//         )
//       );
//     } catch (err) {}
//   };

//   // Dislike update
//   const handleDislike = async (id) => {
//     try {
//       await axios.get(`${API_BASE}/${id}/dislike`);
//       setUpdates((prev) =>
//         prev.map((u) =>
//           u._id === id ? { ...u, dislike: (u.dislike || 0) + 1 } : u
//         )
//       );
//     } catch (err) {}
//   };

//   // Handle comment input change
//   const handleCommentChange = (id, value) => {
//     setCommentInputs((prev) => ({ ...prev, [id]: value }));
//   };

//   // Add comment
//   const handleCommentSubmit = async (id) => {
//     const text = commentInputs[id]?.trim();
//     if (!text) return;
//     const author = nextUserNames[id] || getRandomUserName();
//     try {
//       await axios.post(`${API_BASE}/${id}/comment`, { text, author });
//       const newComment = {
//         text,
//         createdAt: new Date().toISOString(),
//         author,
//       };
//       setUpdates((prev) =>
//         prev.map((u) =>
//           u._id === id
//             ? { ...u, comment: [...(u.comment || []), newComment] }
//             : u
//         )
//       );
//       setCommentInputs((prev) => ({ ...prev, [id]: "" }));
//       setNextUserNames((prev) => ({ ...prev, [id]: getRandomUserName() }));
//     } catch (err) {}
//   };

//   // Toggle comment expansion
//   const toggleComments = (id) => {
//     setExpandedComments((prev) => ({ ...prev, [id]: !prev[id] }));
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
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//       <div className="max-w-4xl mx-auto p-6">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//             Daily Updates
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Stay connected with my progress
//           </p>
//         </div>
//         {/* Category Filter */}
//         <div className="mb-8">
//           <div className="flex flex-wrap gap-3 justify-center">
//             <button
//               key="all"
//               onClick={() => setSelectedCategory("all")}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                 selectedCategory === "all"
//                   ? "bg-gray-500 text-white shadow-lg transform scale-105"
//                   : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
//               }`}
//             >
//               All Updates
//             </button>
//             {categories.map((category) => (
//               <button
//                 key={category._id}
//                 onClick={() => setSelectedCategory(category.name)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                   selectedCategory === category.name
//                     ? "bg-blue-500 text-white shadow-lg transform scale-105"
//                     : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
//                 }`}
//               >
//                 {category.name}
//                 <span className="ml-2 text-xs opacity-75">
//                   {
//                     updates.filter(
//                       (u) => u.createdBy?.name === category.name
//                     ).length
//                   }
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>
//         {/* Updates Feed */}
//         <div className="space-y-8">
//           {loading && (
//             <div className="text-center text-gray-500">Loading...</div>
//           )}
//           {!loading && filteredUpdates.length === 0 && (
//             <div className="text-center text-gray-500">
//               No updates found for this category.
//             </div>
//           )}
//           {!loading &&
//             filteredUpdates.map((update) => (
//               <div
//                 key={update._id}
//                 className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 overflow-hidden"
//               >
//                 <div className="p-6 pb-4">
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="flex-1 pr-4">
//                       <div className="flex items-center gap-3 mb-2">
//                         <span className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
//                           {update.createdBy?.name || "Unknown"}
//                         </span>
//                         <div className="flex items-center gap-1 text-sm text-gray-500">
//                           <Clock className="w-3 h-3" />
//                           {formatTimeAgo(update.createdAt)}
//                         </div>
//                       </div>
//                       <h2 className="text-xl font-semibold text-gray-800">
//                         {update.name}
//                       </h2>
//                     </div>
//                   </div>
//                   <p className="text-gray-700 leading-relaxed mb-6">
//                     {update.description}
//                   </p>
//                   <div className="flex items-center gap-4">
//                     <button
//                       onClick={() => handleLike(update._id)}
//                       className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full transition-all duration-200 transform hover:scale-105"
//                     >
//                       <Heart className="w-4 h-4" />
//                       <span className="font-medium">{update.like || 0}</span>
//                     </button>
//                     <button
//                       onClick={() => handleDislike(update._id)}
//                       className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-all duration-200"
//                     >
//                       <ThumbsDown className="w-4 h-4" />
//                       <span className="font-medium">{update.dislike || 0}</span>
//                     </button>
//                     <button
//                       onClick={() => toggleComments(update._id)}
//                       className="flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full transition-all duration-200"
//                     >
//                       <MessageCircle className="w-4 h-4" />
//                       <span className="font-medium">
//                         {(update.comment || []).length}
//                       </span>
//                       <span className="text-sm">
//                         {(update.comment || []).length === 1
//                           ? "comment"
//                           : "comments"}
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//                 {/* Comments Section */}
//                 <div className="border-t border-gray-100 bg-gray-50/50">
//                   <div className="p-6 pb-4">
//                     <div className="flex gap-3">
//                       <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
//                         {(nextUserNames[update._id] || "A").charAt(0)}
//                       </div>
//                       <div className="flex-1 flex gap-2">
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
//                           className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent bg-white text-black"
//                         />
//                         <button
//                           onClick={() => handleCommentSubmit(update._id)}
//                           className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
//                         >
//                           <Send className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   {(update.comment || []).length > 0 && (
//                     <div className="px-6 pb-6">
//                       <div className="space-y-4">
//                         {(expandedComments[update._id]
//                           ? update.comment
//                           : update.comment.slice(0, 2)
//                         ).map((comment, idx) => (
//                           <div key={idx} className="flex gap-3 group">
//                             <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
//                               {comment.author?.charAt(0) || "A"}
//                             </div>
//                             <div className="flex-1">
//                               <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
//                                 <div className="flex items-center gap-2 mb-1">
//                                   <span className="font-medium text-gray-800 text-sm">
//                                     {comment.author || "Anonymous"}
//                                   </span>
//                                   <span className="text-xs text-gray-500">
//                                     {formatTimeAgo(comment.createdAt)}
//                                   </span>
//                                 </div>
//                                 <p className="text-gray-700 text-sm leading-relaxed">
//                                   {comment.text}
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                         {update.comment.length > 2 && (
//                           <button
//                             onClick={() => toggleComments(update._id)}
//                             className="text-blue-600 hover:text-blue-700 text-sm font-medium ml-11 transition-colors"
//                           >
//                             {expandedComments[update._id]
//                               ? "Show less"
//                               : `Show ${update.comment.length - 2} more comments`}
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                   {(update.comment || []).length === 0 && (
//                     <div className="px-6 pb-6 text-center">
//                       <p className="text-gray-500 text-sm">
//                         No comments yet. Be the first to share your thoughts!
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DailyUpdate;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { getRandomUserName } from "../../utils/helper";
import Header from "./Component/Header";
import CategoryFilter from "./Component/CategoryFilter";
import LoadingSpinner from "./Utility/LoadingSpinner";
import EmptyState from "./Utility/EmptyState";
import UpdatesFeed from "./Component/UpdateFeeds";
// import Header from "./components/Header";
// import CategoryFilter from "./components/CategoryFilter";
// import UpdatesFeed from "./components/UpdatesFeed";
// import LoadingSpinner from "./components/LoadingSpinner";
// import EmptyState from "./components/EmptyState";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    fetchUpdates();
    fetchCategories();
  }, []);

  const fetchUpdates = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_BASE);
      const updatesArr = res.data.data.updates || [];
      setUpdates(updatesArr);
      
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

  const filteredUpdates = selectedCategory === "all"
    ? updates
    : updates.filter(update => update.createdBy?.name === selectedCategory);

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

  const handleCommentChange = (id, value) => {
    setCommentInputs((prev) => ({ ...prev, [id]: value }));
  };

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

  const toggleComments = (id) => {
    setExpandedComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto p-4 md:p-6">
        <Header isVisible={isVisible} />
        
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          updates={updates}
          isVisible={isVisible}
        />

        <div className="space-y-6 md:space-y-8">
          {loading && <LoadingSpinner />}
          
          {!loading && filteredUpdates.length === 0 && (
            <EmptyState selectedCategory={selectedCategory} />
          )}

          {!loading && filteredUpdates.length > 0 && (
            <UpdatesFeed
              updates={filteredUpdates}
              onLike={handleLike}
              onDislike={handleDislike}
              commentInputs={commentInputs}
              onCommentChange={handleCommentChange}
              onCommentSubmit={handleCommentSubmit}
              expandedComments={expandedComments}
              toggleComments={toggleComments}
              nextUserNames={nextUserNames}
              isVisible={isVisible}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyUpdate;
