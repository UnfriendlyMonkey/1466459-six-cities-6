import {loadOffers, loadComments, loadNearPlaces, requireAuthorization, redirectToRoute, setActiveOffer, loadFavorite, updateFavorite} from './action';
import {AuthorizationStatus} from '../const';
import {offersAdapter} from '../services/offers-adapter';
import {commentsAdapterToClient} from '../services/comments-adapter';
import {AppRoute, APIRoute} from '../const';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => data.map(offersAdapter))
    .then((offers) => dispatch(loadOffers(offers)))
);

export const fetchProperty = (id) => (dispatch, _getState, api) => {
  (api.get(`/hotels/${id}`)
    .then(({data}) => offersAdapter(data))
    // .then((property) => dispatch(loadProperty(property)))
    .then((property) => dispatch(setActiveOffer(property)))
  );
};

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
  .then(({data}) => data.map(commentsAdapterToClient))
  .then((comments) => dispatch(loadComments(comments)))
);

export const fetchNearPlaces = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => data.map(offersAdapter))
    .then((offers) => dispatch(loadNearPlaces(offers)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      return dispatch(requireAuthorization(AuthorizationStatus.AUTH, data.email));
    })
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH, email)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch(() => {})
);

export const logOut = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => {
      return dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
    .catch(() => {})
);

export const fetchFavorite = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => data.map(offersAdapter))
    .then((offers) => dispatch(loadFavorite(offers)))
    .catch(() => {})
);

export const setFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
  // что делать, если действие вызвано из других списков (например, nearPlaces)?
    .then(({data}) => offersAdapter(data))
    // .then((offer) => dispatch(updateFavorite(offer)))
    // .then((offer) => dispatch(updateProperty(offer)))
    .catch(() => {})
);

export const postComment = (id, comment) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, comment)
    .then(({data}) => data.map(commentsAdapterToClient))
    .then((comments) => dispatch(loadComments(comments)))
    .catch(() => {})
);
