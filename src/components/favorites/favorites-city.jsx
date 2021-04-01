import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import {setActiveCity} from '../../store/action';
import {connect} from 'react-redux';
import {AppRoute} from '../../const';
import browserHistory from '../../browser-history';

const FavoritesCity = (props) => {
  const {city, offers, changeActiveCity} = props;

  const handleCityClick = (evt) => {
    evt.preventDefault();
    changeActiveCity(city);
    browserHistory.push(AppRoute.MAIN);
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.MAIN}
            onClick={handleCityClick}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard key={offer.id} offer={offer} from={`favorites`}/>
        ))}
      </div>
    </li>
  );
};

FavoritesCity.propTypes = {
  city: PropTypes.string,
  offers: PropTypes.arrayOf(
      offerType
  ).isRequired,
  changeActiveCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveCity(city) {
    dispatch(setActiveCity(city));
  },
});

export {FavoritesCity};
export default connect(null, mapDispatchToProps)(FavoritesCity);
