import React from 'react';
import { Heart, ThumbsDown, MessageCircle, Share2 } from 'lucide-react';

const InteractionButtons = ({ update, onLike, onDislike, toggleComments }) => {
  return (
    <div className="flex items-center gap-2 md:gap-4 flex-wrap">
      <button
        onClick={() => onLike(update._id)}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
      >
        <Heart className="w-4 h-4" />
        <span className="font-medium">{update.like || 0}</span>
      </button>
      
      <button
        onClick={() => onDislike(update._id)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-all duration-200 hover:scale-105"
      >
        <ThumbsDown className="w-4 h-4" />
        <span className="font-medium">{update.dislike || 0}</span>
      </button>
      
      <button
        onClick={() => toggleComments(update._id)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full transition-all duration-200 hover:scale-105"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="font-medium">{(update.comment || []).length}</span>
        <span className="text-sm hidden sm:inline">
          {(update.comment || []).length === 1 ? "comment" : "comments"}
        </span>
      </button>
      
      <button className="flex items-center gap-2 px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-full transition-all duration-200 hover:scale-105">
        <Share2 className="w-4 h-4" />
        <span className="text-sm hidden sm:inline">Share</span>
      </button>
    </div>
  );
};

export default InteractionButtons;
