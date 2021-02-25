import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offer';

const PlaceCard = (props) => {
  const {offer, onHover, fromFavorites = false} = props;
  const {isPremium, price, previewImage, rating, title, type, isFavorite, id} = offer;
  const premiumMark = <div className="place-card__mark">
    <span>Premium</span>
  </div>;
  const favoriteClassName = () => {
    const prefix = `place-card__bookmark-button button`;
    return isFavorite ? prefix + ` place-card__bookmark-button--active` : prefix;
  };

  const handleHover = () => {
    if (onHover) {
      onHover(id);
    }
  };

  return (
    <article className={fromFavorites ? `favorites__card place-card` : `cities__place-card place-card`} onMouseEnter={handleHover}>
      {isPremium && premiumMark}
      <div className={fromFavorites ? `favorites__image-wrapper place-card__image-wrapper` : `cities__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={fromFavorites ? `150` : `260`} height={fromFavorites ? `110` : `200`} alt="Place image"/>
        </a>
      </div>
      <div className={fromFavorites ? `favorites__card-info place-card__info` : `place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={favoriteClassName()} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (Math.round(rating) * 20).toString() + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/` + id}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: offerType,
  onHover: PropTypes.func,
  fromFavorites: PropTypes.bool
};

export default PlaceCard;
