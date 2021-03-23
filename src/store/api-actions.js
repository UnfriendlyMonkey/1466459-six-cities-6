import {ActionCreator} from './action';
import {AuthorizationStatus} from './reducer';
import {offersAdapter} from '../services/offers-adapter';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => data.map(offersAdapter))
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
);

// export const fetchProperty = ({id}) => (dispatch, _getState, api) => (
//   api.get(`/hotels/${id}`)
//     .then(({data}) => dispatch(ActionCreator.loadProperty(data)))
// );

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);
