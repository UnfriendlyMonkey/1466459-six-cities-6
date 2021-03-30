import {createReducer} from '@reduxjs/toolkit';
import {setActiveOffer, loadProperty, loadComments, loadNearPlaces} from '../action';

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
  // one of them is unnecessary
  builder.addCase(loadProperty, (state, action) => {
    state.activeOffer = action.payload;
  });
  builder.addCase(loadComments, (state, action) => {
    state.comments = action.payload;
  });
  builder.addCase(loadNearPlaces, (state, action) => {
    state.nearPlaces = action.payload;
  });
});

// const property = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionType.SET_ACTIVE_OFFER:
//       return {
//         ...state,
//         activeOffer: action.payload
//       };
//     case ActionType.LOAD_PROPERTY:
//       return {
//         ...state,
//         activeOffer: action.payload
//       };
//     case ActionType.LOAD_COMMENTS:
//       return {
//         ...state,
//         comments: action.payload
//       };
//     case ActionType.LOAD_NEAR_PLACES:
//       return {
//         ...state,
//         nearPlaces: action.payload
//       };
//   }

//   return state;
// };

export {property};
