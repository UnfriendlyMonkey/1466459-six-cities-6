import {loadFavorite, requireAuthorization} from '../action';
import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: ``,
  favorite: [],
  isFavoriteLoaded: false,
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload.status;
    state.login = action.payload.login;
  });
  builder.addCase(loadFavorite, (state, action) => {
    state.favorite = action.payload;
    state.isFavoriteLoaded = true;
  });
});

export {user};
