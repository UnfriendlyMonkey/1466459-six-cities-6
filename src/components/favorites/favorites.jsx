import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {offerType} from '../../types/offer';
import FavoritesCity from './favorites-city';
import {getFavorites, getLoadedFavoriteStatus} from '../../store/offers/selectors';
import {fetchFavorite} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';


const Favorites = (props) => {
  const {offers, isFavoriteLoaded, onLoadFavorites} = props;
  useEffect(() => {
    if (!isFavoriteLoaded) {
      onLoadFavorites();
    }
  }, [isFavoriteLoaded]);
  // const offers = props.offers.filter((offer) => offer.isFavorite === true);
  if (!isFavoriteLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const emptyList = (
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
          </div>
        </section>
      </div>
    </main>
  );
  const cities = [...new Set(offers.map((offer) => offer.city.name))];
  const noEmptyList = (
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

  return offers.length === 0 ? emptyList : noEmptyList;
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(
      offerType
  ),
  isFavoriteLoaded: PropTypes.bool.isRequired,
  onLoadFavorites: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getFavorites(state),
  isFavoriteLoaded: getLoadedFavoriteStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites() {
    dispatch(fetchFavorite());
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
