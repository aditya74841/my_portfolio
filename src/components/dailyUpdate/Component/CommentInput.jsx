import React from 'react';
import { Send, User } from 'lucide-react';

const CommentInput = ({ 
  updateId, 
  commentInputs, 
  onCommentChange, 
  onCommentSubmit, 
  nextUserNames 
}) => {
  return (
    <div className="p-4 md:p-6">
      <div className="flex gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm shadow-lg">
          <User className="w-5 h-5" />
        </div>
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            placeholder="Share your thoughts..."
            value={commentInputs[updateId] || ""}
            onChange={(e) => onCommentChange(updateId, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onCommentSubmit(updateId);
            }}
            className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-800 placeholder-gray-500 shadow-sm"
          />
          <button
            onClick={() => onCommentSubmit(updateId)}
            className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 shadow-lg transform hover:scale-105"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
