import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {offerType} from '../../types/offer';
import FavoritesCity from './favorites-city';


const Favorites = (props) => {
  const offers = props.offers.filter((offer) => offer.isFavorite === true);
  const cities = [...new Set(offers.map((offer) => offer.city.name))];

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((city) => (
              <FavoritesCity key={cities.indexOf(city)} city={city} offers={offers.filter((offer) => offer.city.name === city)}/>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(
      offerType
  )
};

const mapStateToProps = ({OFFERS}) => ({
  offers: OFFERS.offers,
});

export {Favorites};
export default connect(mapStateToProps, null)(Favorites);
