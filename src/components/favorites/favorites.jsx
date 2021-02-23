import React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offer';
import PlaceCard from '../place-card/place-card';


const Favorites = (props) => {
  const {offers} = props;
  const cities = new Set(offers.map((offer) => offer.city.name));

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offers.map((offer) => (
                  <PlaceCard key={offer.id} offer={offer} fromFavorites={true}/>
                ))}
              </div>
            </li>

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Cologne</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offers.map((offer) => (
                  <PlaceCard key={offer.id} offer={offer} fromFavorites={true}/>
                ))}
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(
      offerType
  ).isRequired
};

export default Favorites;
