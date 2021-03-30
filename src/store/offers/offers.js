import {ActionType} from '../action';

const initialState = {
  locations: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  currentCity: `Paris`,
  offers: [],
  isDataLoaded: false,
};

const offers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };
    case ActionType.UPDATE_PROPERTY:
      const index = state.offers.find((offer) => offer.id === action.payload.id);
      return {
        ...state,
        offers: offers.splice(index, 1, action.payload)
      };
  }

  return state;
};

export {offers};
