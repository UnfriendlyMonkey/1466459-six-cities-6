import React from 'react';
import PropTypes from 'prop-types';
import CommentCard from '../comment-card/comment-card';

const CommentsList = ({id}) => {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <CommentCard />
      </ul>
    </>
  );
};

CommentsList.propTypes = {
  id: PropTypes.number.isRequired
};

export default CommentsList;
