// import offers from '../mocks/offers';
import {ActionType} from './action';
import {AuthorizationStatus} from '../const';

const initialState = {
  locations: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  currentCity: `Paris`,
  offers: [],
  currentProperty: {},
  // offersToShow: offers.filter((offer) => offer.city.name === `Paris`),
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  activeOffer: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload
      };
    case ActionType.SET_ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: action.payload
      };
    case ActionType.RESET:
      return {
        ...initialState
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };
    // case ActionType.LOAD_PROPERTY:
    //   return {
    //     ...state,
    //     currentProperty: action.payload
    //   };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload.status,
        login: action.payload.login
      };
  }
  return state;
};

export {reducer};
