import React from 'react';
import UpdateCard from './UpdateCard';

const UpdatesFeed = ({ 
  updates, 
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
    <div className="space-y-6 md:space-y-8">
      {updates.map((update, index) => (
        <UpdateCard
          key={update._id}
          update={update}
          index={index}
          onLike={onLike}
          onDislike={onDislike}
          commentInputs={commentInputs}
          onCommentChange={onCommentChange}
          onCommentSubmit={onCommentSubmit}
          expandedComments={expandedComments}
          toggleComments={toggleComments}
          nextUserNames={nextUserNames}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
};

export default UpdatesFeed;
