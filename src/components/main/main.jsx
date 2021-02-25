import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offer';
import OffersList from '../offers-list/offers-list';


const Main = (props) => {
  const {locations, offers} = props;
  const [activeCity, setActiveCity] = useState(`Amsterdam`);
  const placesFound = offers.filter((offer) => offer.city.name === activeCity).length;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              locations.map((item, i) => <li key={item + i} className="locations__item">
                <a
                  className={item === activeCity ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`}
                  href="#"
                  onClick={({target}) => {
                    setActiveCity(target.textContent);
                  }}>
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
            <b className="places__found">{placesFound} places to stay in {activeCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <OffersList offers={offers.filter((offer) => offer.city.name === activeCity)}/>
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
  offers: PropTypes.arrayOf(
      offerType
  ).isRequired
};

export default Main;
