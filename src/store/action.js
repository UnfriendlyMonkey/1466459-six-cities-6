export const ActionType = {
  CHANGE_CITY: `changeCity`,
  RESET: `reset`,
  LOAD_OFFERS: `loadOffers`,
  // LOAD_PROPERTY: `loadProperty`,
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
  REDIRECT_TO_ROUTE: `redirectToRoute`,
};

export const ActionCreator = {
  setActiveCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  reset: () => ({
    type: ActionType.RESET,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  // loadProperty: (property) => ({
  //   type: ActionType.LOAD_PROPERTY,
  //   payload: property
  // }),
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
