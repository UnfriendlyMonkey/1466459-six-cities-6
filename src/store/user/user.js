import {loadFavorite, requireAuthorization, updateFavorite} from '../action';
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
  builder.addCase(updateFavorite, (state, action) => {
    // еще один вариант. тоже не работает
    const oldItem = state.favorite.find((offer) => offer.id === action.payload.id);
    if (oldItem === undefined && action.payload.isFavorite) {
      state.favorite.push(action.payload);
    } else if (oldItem !== undefined && !action.payload.isFavorite) {
      const index = state.favorite.indexOf(oldItem);
      state.favorite.splice(index, 1);
    }
  });
});

export {user};
