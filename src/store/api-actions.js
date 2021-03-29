import {ActionCreator} from './action';
import {AuthorizationStatus} from '../const';
import {offersAdapter} from '../services/offers-adapter';
import {commentsAdapterToClient} from '../services/comments-adapter';
import {AppRoute, APIRoute} from '../const';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => data.map(offersAdapter))
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
);

export const fetchProperty = (id) => (dispatch, _getState, api) => {
  (api.get(`/hotels/${id}`)
    .then(({data}) => offersAdapter(data))
    .then((property) => dispatch(ActionCreator.loadProperty(property)))
  );
};

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
  .then(({data}) => data.map(commentsAdapterToClient))
  .then((comments) => dispatch(ActionCreator.loadComments(comments)))
);

export const fetchNearPlaces = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => data.map(offersAdapter))
    .then((offers) => dispatch(ActionCreator.loadNearPlaces(offers)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      return dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, data.email));
    })
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, email)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
    .catch(() => {})
);

export const logOut = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => {
      return dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
    .catch(() => {})
);
