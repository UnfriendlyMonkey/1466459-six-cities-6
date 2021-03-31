import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import {setActiveOffer} from '../../store/action';
import {setFavorite} from '../../store/api-actions';

const OffersList = (props) => {
  const {offers, from = `main`, changeActiveOffer, toggleFavorite} = props;
  let divClassName = `places__list`;

  switch (from) {
    case (`property`):
      divClassName += ` near-places__list`;
      break;
    default:
      divClassName += ` cities__places-list tabs__content`;
  }

  return (
    <div className={divClassName}>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} onHover={changeActiveOffer} onFavoriteClick={toggleFavorite} from={from}/>
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      offerType
  ).isRequired,
  from: PropTypes.oneOf([`main`, `favorites`, `property`]),
  changeActiveOffer: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveOffer(offer) {
    dispatch(setActiveOffer(offer));
  },
  toggleFavorite(offer) {
    const status = offer.isFavorite ? 0 : 1;
    dispatch(setFavorite(offer.id, status));
    // не перерисовывает весь список.
    // рендерит заново карточку, статус которой поменялся, не удаляя предыдущий экземпляр
    // причем поверх первой карточки из списка
  },
});

export {OffersList};
export default connect(null, mapDispatchToProps)(OffersList);
