import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setActiveCity} from '../../store/action';

const LocationsList = (props) => {
  const {locations, activeCity, changeActiveCity} = props;

  return (
    <>
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
                    changeActiveCity(target.textContent);
                  }}>
                  <span>{item}</span>
                </a>
              </li>)
            }
          </ul>
        </section>
      </div>
    </>
  );
};

LocationsList.propTypes = {
  locations: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  activeCity: PropTypes.string.isRequired,
  changeActiveCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  locations: state.locations,
  activeCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveCity(city) {
    dispatch(setActiveCity(city));
  },
});

export {LocationsList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
