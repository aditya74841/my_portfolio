import React from 'react';
import { Clock, User } from 'lucide-react';
import InteractionButtons from './InteractionButton';
import CommentSection from './CommentSection';
import { formatTimeAgo } from '../Utility/timeUtils';
// import InteractionButtons from './InteractionButtons';
// import CommentSection from './CommentSection';
// import { formatTimeAgo } from '../utils/timeUtils';

const UpdateCard = ({ 
  update, 
  index, 
  onLike, 
  onDislike, 
  commentInputs, 
  onCommentChange, 
  onCommentSubmit, 
  expandedComments, 
  toggleComments, 
  nextUserNames, 
  isVisible 
}) => {
  return (
    <div className={`group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden transform hover:scale-[1.02] ${
      isVisible ? 'animate-fadeInUp' : 'opacity-0'
    }`} style={{ animationDelay: `${index * 150}ms` }}>
      
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {update.createdBy?.name || "Unknown"}
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  Creator
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{formatTimeAgo(update.createdAt)}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">Live</span>
          </div>
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {update.name}
        </h2>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
            {update.description}
          </p>
        </div>
        
        <InteractionButtons
          update={update}
          onLike={onLike}
          onDislike={onDislike}
          toggleComments={toggleComments}
        />
      </div>
      
      <CommentSection
        update={update}
        commentInputs={commentInputs}
        onCommentChange={onCommentChange}
        onCommentSubmit={onCommentSubmit}
        expandedComments={expandedComments}
        toggleComments={toggleComments}
        nextUserNames={nextUserNames}
      />
    </div>
  );
};

export default UpdateCard;
