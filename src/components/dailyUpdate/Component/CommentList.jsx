import React from 'react';
import { MessageSquare, User } from 'lucide-react';
import { formatTimeAgo } from '../Utility/timeUtils';

const CommentList = ({ update, expandedComments, toggleComments }) => {
  const comments = update.comment || [];
  
  if (comments.length === 0) {
    return (
      <div className="px-4 md:px-6 pb-6 text-center">
        <div className="flex flex-col items-center gap-3 py-8">
          <MessageSquare className="w-12 h-12 text-gray-300" />
          <p className="text-gray-500 text-sm">
            No comments yet. Be the first to share your thoughts!
          </p>
        </div>
      </div>
    );
  }

  const displayedComments = expandedComments[update._id] 
    ? comments 
    : comments.slice(0, 2);

  return (
    <div className="px-4 md:px-6 pb-6">
      <div className="space-y-4">
        {displayedComments.map((comment, idx) => (
          <div key={idx} className="flex gap-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm shadow-md">
              {comment.author?.charAt(0) || "A"}
            </div>
            <div className="flex-1">
              <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-2 mb-2">
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
        
        {comments.length > 2 && (
          <button
            onClick={() => toggleComments(update._id)}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium ml-11 transition-colors flex items-center gap-1"
          >
            {expandedComments[update._id] ? (
              <>Show less</>
            ) : (
              <>Show {comments.length - 2} more comments</>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentList;
