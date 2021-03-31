import React from 'react';
import PropTypes from 'prop-types';
import CommentCard from '../comment-card/comment-card';

const CommentsList = ({comments}) => {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((item) => (
          <CommentCard key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentsList;
