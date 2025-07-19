import React from 'react';
import { Send, MessageSquare } from 'lucide-react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

const CommentSection = ({ 
  update, 
  commentInputs, 
  onCommentChange, 
  onCommentSubmit, 
  expandedComments, 
  toggleComments, 
  nextUserNames 
}) => {
  return (
    <div className="border-t border-gray-100 bg-gradient-to-r from-gray-50/50 to-blue-50/50">
      <CommentInput
        updateId={update._id}
        commentInputs={commentInputs}
        onCommentChange={onCommentChange}
        onCommentSubmit={onCommentSubmit}
        nextUserNames={nextUserNames}
      />
      
      <CommentList
        update={update}
        expandedComments={expandedComments}
        toggleComments={toggleComments}
      />
    </div>
  );
};

export default CommentSection;
