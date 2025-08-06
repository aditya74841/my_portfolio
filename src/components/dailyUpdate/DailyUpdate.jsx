

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
