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

export const setActiveCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const setActiveOffer = (offer) => ({
  type: ActionType.SET_ACTIVE_OFFER,
  payload: offer,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const loadProperty = (property) => ({
  type: ActionType.LOAD_PROPERTY,
  payload: property
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});

export const loadNearPlaces = (offers) => ({
  type: ActionType.LOAD_NEAR_PLACES,
  payload: offers
});

export const loadFavorite = (offers) => ({
  type: ActionType.LOAD_FAVORITE,
  payload: offers
});

export const updateProperty = (property) => ({
  type: ActionType.UPDATE_PROPERTY,
  payload: property
});

export const requireAuthorization = (status, login = ``) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: {
    status,
    login
  }
});

export const reset = () => ({
  type: ActionType.RESET,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
