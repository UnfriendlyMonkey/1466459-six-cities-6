import React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offer';
import OffersList from '../offers-list/offers-list';


const Main = (props) => {
  const {placesFound, locations, offers} = props;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              locations.map((item, i) => <li key={item + i} className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>{item}</span>
                </a>
              </li>)
            }
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesFound} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <OffersList offers={offers}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  locations: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  placesFound: PropTypes.number,
  offers: PropTypes.arrayOf(
      offerType
  ).isRequired
};

export default Main;
