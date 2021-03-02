import React from 'react';
import PropTypes from 'prop-types';
import CommentCard from '../comment-card/comment-card';
import comments from '../../mocks/comments';

const CommentsList = ({id}) => {

  const items = comments.filter((item) => item.propertyId === id);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {items.map((item) => (
          <CommentCard key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

CommentsList.propTypes = {
  id: PropTypes.number.isRequired
};

export default CommentsList;
