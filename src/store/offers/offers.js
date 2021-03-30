import {createReducer} from '@reduxjs/toolkit';
import {setActiveCity, loadOffers, updateProperty, changeSortingType} from '../action';

const initialState = {
  locations: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  currentCity: `Paris`,
  offers: [],
  isDataLoaded: false,
  sortedBy: `Popular`,
};

const offers = createReducer(initialState, (builder) => {
  builder.addCase(setActiveCity, (state, action) => {
    state.currentCity = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    state.isDataLoaded = true;
  });
  builder.addCase(updateProperty, (state, action) => {
    const index = state.offers.find((offer) => offer.id === action.payload.id);
    state.offers.splice(index, 1, action.payload);
  });
  builder.addCase(changeSortingType, (state, action) => {
    state.sortedBy = action.payload;
  });
});

// const offers = (state = initialState, action) => {
//   switch (action.type) {
// case ActionType.CHANGE_CITY:
//   return {
//     ...state,
//     currentCity: action.payload
//   };
// case ActionType.LOAD_OFFERS:
//   return {
//     ...state,
//     offers: action.payload,
//     isDataLoaded: true
//   };
// case ActionType.UPDATE_PROPERTY:
//   const index = state.offers.find((offer) => offer.id === action.payload.id);
//   return {
//     ...state,
//     offers: offers.splice(index, 1, action.payload)
//   };
//     case ActionType.CHANGE_SORTING_TYPE:
//       return {
//         ...state,
//         sortedBy: action.payload
//       };
//   }

//   return state;
// };

export {offers};
