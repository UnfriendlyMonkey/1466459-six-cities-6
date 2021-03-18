export const ActionType = {
  CHANGE_CITY: `changeCity`,
  RESET: `reset`,
};

export const ActionCreator = {
  setActiveCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  reset: () => ({
    type: ActionType.RESET,
  })
};
