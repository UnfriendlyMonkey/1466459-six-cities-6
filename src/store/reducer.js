import offers from '../mocks/offers';
import {ActionType} from './action';

const initialState = {
  LOCATIONS: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  currentCity: `Paris`,
  offers,
  offersToShow: offers.filter((offer) => offer.city.name === `Paris`)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload
      };
    case ActionType.RESET:
      return {
        ...initialState
      };
  }
  return state;
};

export {reducer};
