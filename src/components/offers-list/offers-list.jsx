import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

const OffersList = (props) => {
  const {offers, from = `main`} = props;
  const setActiveOffer = useState(null)[1];
  let divClassName = `places__list`;

  switch (from) {
    case (`property`):
      divClassName += ` near-places__list`;
      break;
    default:
      divClassName += ` cities__places-list tabs__content`;
  }

  // console.log(activeOffer);
  // может логичнее сюда и карту перенести тогда, иначе непонятно, где и как это состояние использовать?

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
  from: PropTypes.oneOf([`main`, `favorites`, `property`])
};

export default OffersList;
