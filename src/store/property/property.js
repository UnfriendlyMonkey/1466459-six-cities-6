import {ActionType} from '../action';

const initialState = {
  currentProperty: {},
  activeOffer: {},
  comments: [],
  nearPlaces: [],
};

const property = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: action.payload
      };
    case ActionType.LOAD_PROPERTY:
      return {
        ...state,
        activeOffer: action.payload
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case ActionType.LOAD_NEAR_PLACES:
      return {
        ...state,
        nearPlaces: action.payload
      };
  }

  return state;
};

export {property};
