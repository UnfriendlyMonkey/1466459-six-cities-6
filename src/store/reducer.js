import offers from '../mocks/offers';
import {ActionType} from './action';

const initialState = {
  currentCity: `Paris`,
  offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload
      };
  }
  return state;
};

export {reducer};
