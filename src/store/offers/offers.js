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
    const index = state.offers.indexOf((offer) => offer.id === action.payload.id);
    // кажется, что так не получить доступ к state.offers. Как тогда?
    state.offers.splice(index, 1, action.payload);
    // возможно, здесь как-то иначе нужно пропихивать обновленную карточку в список?
  });
  builder.addCase(changeSortingType, (state, action) => {
    state.sortedBy = action.payload;
  });
});

export {offers};
