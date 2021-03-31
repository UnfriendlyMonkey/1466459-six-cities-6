import {bool, func, number, string} from 'prop-types';
import React, {useState} from 'react';
import {connect} from 'react-redux';
// import {setFavorite} from '../../store/api-actions';

const FavoriteButton = ({id, isFavorite, toggleFavorite, from = `property`}) => {
  // console.log(props);
  // console.log(id, isFavorite, toggleFavorite);

  // const {id, isFavorite} = props;

  const [favorite, changeFavorite] = useState(isFavorite);
  const status = favorite ? 0 : 1;
  const handleFavorite = () => {
    toggleFavorite(id, status);
    changeFavorite((prevState) => ({
      ...prevState,
      favorite: !prevState.favorite,
    }));
  };
  switch (from) {
    case (`place-card`):
      return (
        <button
          className={`place-card__bookmark-button button ${favorite && `place-card__bookmark-button--active`}`}
          type="button"
          onClick={handleFavorite}>
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      );
    default:
      return (
        <button
          className={`property__bookmark-button button ${favorite && `property__bookmark-button--active`}`}
          type="button"
          onClick={handleFavorite}>
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      );
  }
};

FavoriteButton.propTypes = {
  id: number.isRequired,
  isFavorite: bool.isRequired,
  toggleFavorite: func.isRequired,
  from: string,
};

// const mapDispatchToProps = (dispatch) => ({
//   toggleFavorite(id, status) {
//     dispatch(setFavorite(id, status));
//   }
// });

export {FavoriteButton};
export default connect(null, null)(FavoriteButton);
