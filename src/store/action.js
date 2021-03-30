import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: `changeCity`,
  SET_ACTIVE_OFFER: `setActiveOffer`,
  RESET: `reset`,
  LOAD_OFFERS: `loadOffers`,
  LOAD_PROPERTY: `loadProperty`,
  LOAD_COMMENTS: `loadComments`,
  LOAD_NEAR_PLACES: `loadNearPlaces`,
  LOAD_FAVORITE: `loadFavorite`,
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
  REDIRECT_TO_ROUTE: `redirectToRoute`,
  UPDATE_PROPERTY: `updateProperty`,
};

export const setActiveCity = createAction(ActionType.CHANGE_CITY, (city) => {
  return {
    payload: city,
  };
});

export const setActiveOffer = createAction(ActionType.SET_ACTIVE_OFFER, (offer) => {
  return {
    payload: offer,
  };
});

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => {
  return {
    payload: offers
  };
});

export const loadProperty = createAction(ActionType.LOAD_PROPERTY, (property) => {
  return {
    payload: property
  };
});

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => {
  return {
    payload: comments
  };
});

export const loadNearPlaces = createAction(ActionType.LOAD_NEAR_PLACES, (offers) => {
  return {
    payload: offers
  };
});

export const loadFavorite = createAction(ActionType.LOAD_FAVORITE, (offers) => {
  return {
    payload: offers
  };
});

export const updateProperty = createAction(ActionType.UPDATE_PROPERTY, (property) => {
  return {
    payload: property
  };
});

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status, login = ``) => {
  return {
    payload: {
      status,
      login
    },
  };
});

export const reset = createAction(ActionType.RESET);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});
