import {object} from "prop-types";

const FavoriteButton = (props) => {
  const {property} = props;
  let {isFavorite} = property;
  return (
    <button
      className={`property__bookmark-button button ${isFavorite && `property__bookmark-button--active`}`}
      type="button"
      onClick={toggleFavorite(property)}>
      <svg className="property__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  property: object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite(offer) {
    const status = offer.isFavorite ? 0 : 1
  }
})
