import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offer';
import {FavoriteButton} from '../favorite-button/favorite-button';
import {setFavorite} from '../../store/api-actions';
import {connect} from 'react-redux';

const PlaceCard = (props) => {
  const {offer, onHover, from = `main`, toggleFavorite} = props;
  const {isPremium, price, previewImage, rating, title, type, isFavorite, id} = offer;
  const premiumMark = <div className="place-card__mark">
    <span>Premium</span>
  </div>;
  let articleClassName = `place-card`;
  let imageWrapperClassName = `place-card__image-wrapper`;
  let infoClassName = `place-card__info`;

  switch (from) {
    case (`favorites`):
      articleClassName += ` favorites__card`;
      imageWrapperClassName += ` favorites__image-wrapper`;
      infoClassName += ` favorites__card-info`;
      break;
    case (`property`):
      articleClassName += ` near-places__card`;
      imageWrapperClassName += ` near-places__image-wrapper`;
      break;
    default:
      articleClassName += ` cities__place-card`;
      imageWrapperClassName += ` cities__image-wrapper`;
  }

  const handleHover = () => {
    if (onHover && from === `main`) {
      onHover(offer);
    }
  };

  return (
    <article className={articleClassName} onMouseEnter={handleHover}>
      {isPremium && premiumMark}
      <div className={imageWrapperClassName}>
        <Link to={`/offer/` + id}>
          <img className="place-card__image" src={previewImage} width={from === `favorites` ? `150` : `260`} height={from === `favorites` ? `110` : `200`} alt="Place image"/>
        </Link>
      </div>
      <div className={infoClassName}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton id={id} isFavorite={isFavorite} toggleFavorite={toggleFavorite} from={`place-card`}/>
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
  toggleFavorite: PropTypes.func,
  from: PropTypes.oneOf([`main`, `favorites`, `property`])
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite(id, status) {
    dispatch(setFavorite(id, status));
  },
});

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);
