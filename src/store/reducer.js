import offers from '../mocks/offers';
import {ActionType} from './action';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  locations: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  currentCity: `Paris`,
  offers,
  offersToShow: offers.filter((offer) => offer.city.name === `Paris`),
  authorizationStatus: AuthorizationStatus.NO_AUTH,
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
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
  }
  return state;
};

export {reducer};
