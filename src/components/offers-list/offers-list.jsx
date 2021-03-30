import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import {setActiveOffer} from '../../store/action';

const OffersList = (props) => {
  const {offers, from = `main`, setActiveOffer} = props;
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
        <PlaceCard key={offer.id} offer={offer} onHover={setActiveOffer} from={from}/>
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      offerType
  ).isRequired,
  from: PropTypes.oneOf([`main`, `favorites`, `property`]),
  setActiveOffer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setActiveOffer(offer) {
    dispatch(setActiveOffer(offer));
  },
});

export {OffersList};
export default connect(null, mapDispatchToProps)(OffersList);
