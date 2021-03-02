import React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offer';
import CommentCard from '../comment-card/comment-card';

const CommentsList = ({comments}) => {

  return (
    <ul className="reviews__list">
      <CommentCard />
    </ul>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
      offerType
  ).isRequired
};

export default CommentsList;
