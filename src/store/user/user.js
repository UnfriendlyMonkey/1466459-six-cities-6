import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: ``,
  favorite: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload.status,
        login: action.payload.login
      };
    case ActionType.LOAD_FAVORITE:
      return {
        ...state,
        favorite: action.payload
      };
  }

  return state;
};

export {user};
