import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {offerType} from '../../types/offer';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import LocationsList from '../locations-list/location-list';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchOffers} from '../../store/api-actions';
import {getCurrentCity, getLoadedDataStatus, getSortingOrder, getSortedOffers} from '../../store/offers/selectors';
import PlacesSort from '../places-sort/places-sort';


const Main = (props) => {
  const {offers, activeCity, isDataLoaded, onLoadData, sortingOrder} = props;
  const placesFound = offers.length;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);
  useEffect(() => {

  }, [sortingOrder]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <main className="page__main page__main--index">
      <LocationsList />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesFound} places to stay in {activeCity}</b>
            <PlacesSort />
            <OffersList offers={offers}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={activeCity} points={offers}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(
      offerType
  ).isRequired,
  activeCity: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  sortingOrder: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getSortedOffers(state),
  activeCity: getCurrentCity(state),
  isDataLoaded: getLoadedDataStatus(state),
  sortingOrder: getSortingOrder(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
