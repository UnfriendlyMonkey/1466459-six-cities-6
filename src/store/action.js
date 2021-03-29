export const ActionType = {
  CHANGE_CITY: `changeCity`,
  SET_ACTIVE_OFFER: `setActiveOffer`,
  RESET: `reset`,
  LOAD_OFFERS: `loadOffers`,
  LOAD_PROPERTY: `loadProperty`,
  LOAD_COMMENTS: `loadComments`,
  LOAD_NEAR_PLACES: `loadNearPlaces`,
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
  REDIRECT_TO_ROUTE: `redirectToRoute`,
};

export const ActionCreator = {
  setActiveCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer,
  }),
  reset: () => ({
    type: ActionType.RESET,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadProperty: (property) => ({
    type: ActionType.LOAD_PROPERTY,
    payload: property
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  loadNearPlaces: (offers) => ({
    type: ActionType.LOAD_NEAR_PLACES,
    payload: offers
  }),
  requireAuthorization: (status, login = ``) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {
      status,
      login
    }
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
