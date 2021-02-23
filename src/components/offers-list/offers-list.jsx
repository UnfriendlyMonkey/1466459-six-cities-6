import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

const OffersList = (props) => {
  const {offers} = props;
  const setActiveOffer = useState(offers[0].id)[1];

  // console.log(activeOffer);
  // может логичнее сюда и карту перенести тогда, иначе непонятно, где и как это состояние использовать?

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} onHover={setActiveOffer}/>
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      offerType
  ).isRequired
};

export default OffersList;
