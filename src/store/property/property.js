import {createReducer} from '@reduxjs/toolkit';
import {setActiveOffer, loadComments, loadNearPlaces} from '../action';

const initialState = {
  currentProperty: {},
  activeOffer: {},
  comments: [],
  nearPlaces: [],
};

const property = createReducer(initialState, (builder) => {
  builder.addCase(setActiveOffer, (state, action) => {
    state.activeOffer = action.payload;
  });
  builder.addCase(loadComments, (state, action) => {
    state.comments = action.payload;
  });
  builder.addCase(loadNearPlaces, (state, action) => {
    state.nearPlaces = action.payload;
  });
});

export {property};
